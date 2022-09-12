<template>
  <div class="bg-black py-2 text-2xl text-white text-center font-bold">
    <h1>Booking Online</h1>
  </div>

  <form action="">
    <!-- Select cinema -->
    <div class="my-4">
      <h2 class="text-lg font-semibold mb-2">Chọn phòng chiếu:</h2>
      <button
        v-for="cinema in cinemas"
        :class="
          cinemaSelected.Name == cinema.Name ? 'bg-red-400 text-white' : null
        "
        :key="cinema.id"
        class="px-4 py-2 mr-2 border border-red-400 font-semibold hover:bg-red-400 hover:text-white"
        @click.prevent="cinemaSelect(cinema)"
      >
        {{ cinema.Name }}
      </button>
    </div>
    <div class="my-3" v-if="cinemaSelected.isSelected">
      <h2 class="text-lg font-semibold mb-2">Chọn thời gian:</h2>
      <button
        v-for="showTimes in cinemaSelected.ShowTimes"
        :key="showTimes.Time"
        :class="
          showTimes.Date == order.Date && showTimes.Time == order.Time
            ? 'bg-red-400 text-white'
            : null
        "
        class="px-4 py-2 mr-2 border border-red-400 font-semibold hover:bg-red-400 hover:text-white"
        @click.prevent="dateSelect(showTimes)"
      >
        {{ showTimes.Date }} <br />{{ showTimes.Time }}
      </button>
    </div>

    <div class="bg-black py-2 text-2xl text-white text-center font-bold">
      <h2>Ghế</h2>
    </div>

    <div class="mt-12">
      <img src="@/assets/movieScreen.png" alt="" class="w-3/4 mx-auto" />
    </div>

    <!-- Select seat -->
    <div class="w-3/4 mx-auto mt-24">
      <div v-for="rowSeat in rowSeats" :key="rowSeat.id">
        <button
          v-for="seat in rowSeat.SeatNumber"
          :key="seat"
          class="border border-red-600 w-14 ml-4 mb-2 hover:bg-red-400 hover:text-white"
          :class="seat.Status == 'Đã chọn' ? 'bg-red-400 text-white' : null"
          @click.prevent="seatSelect(rowSeat, seat)"
        >
          {{ rowSeat.SeatName }}{{ seat.Number }}
        </button>
      </div>
    </div>

    <!-- Select food -->
    <div class="bg-black py-2 text-2xl text-white text-center font-bold mt-12">
      <h2>Bắp nước</h2>
    </div>

    <div class="grid grid-cols-2 gap-5">
      <div v-for="food in foods" :key="food.id" class="grid grid-cols-4 mt-5">
        <div class="col-span-1">
          <img :src="food.Photo" alt="" />
        </div>
        <div class="col-span-3">
          <h3 class="text-lg font-bold uppercase">{{ food.Name }}</h3>
          <p>{{ food.Description }}</p>
          <p>* Miễn phí đổi vị bắp Phô mai, Caramel</p>
          <p>** Nhận trong ngày xem phim</p>
          <p>
            Giá:
            <strong>{{
              new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(food.Price)
            }}</strong>
          </p>

          <div class="flex mt-3">
            <button
              class="bg-red-600 px-2 text-white hover:bg-red-500"
              @click.prevent="
                if (food.Count == null || food.Count == 0) {
                  food.Count = 0;
                } else {
                  food.Count--;
                  order.FoodPrice -= food.Price;
                }
              "
            >
              -
            </button>
            <span
              class="border border-black inline-block w-8 h-6 text-center mx-3"
              >{{ food.Count != null ? food.Count : 0 }}</span
            >
            <button
              class="bg-red-600 px-2 text-white hover:bg-red-500"
              @click.prevent="
                food.Count == null || food.Count == 0
                  ? (food.Count = 1)
                  : food.Count++;
                order.FoodPrice += food.Price;
              "
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Receipt -->
    <div class="mt-12 bg-black p-4 w-full">
      <div class="flex">
        <img :src="order.Poster" alt="" class="w-52 mr-12" />
        <div class="text-white">
          <h3 class="font-bold text-2xl mb-4">{{ order.Title }}</h3>
          <p>
            <strong>Chỗ Ngồi: </strong>
            <span
              v-for="seat in order.SeatsList"
              :key="seat.SeatName + seat.SeatNumber"
              >{{ seat.SeatName }}{{ seat.SeatNumber }},
            </span>
          </p>
          <p><strong>Phòng chiếu: </strong>{{ order.CinemaName }}</p>
          <p><strong>Suất chiếu: </strong>{{ order.Time }}, {{ order.Date }}</p>
          <p>
            <strong>Giá phim: </strong
            >{{
              new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(order.MoviePrice)
            }}
          </p>
          <p>
            <strong>Giá đồ ăn: </strong
            >{{
              new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(order.FoodPrice)
            }}
          </p>
          <p>
            <strong>Tổng: </strong
            >{{
              new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format((order.TotalPrice = order.FoodPrice + order.MoviePrice))
            }}
          </p>
        </div>
      </div>
      <div class="flex justify-end w-full">
        <button
          @click.prevent=""
          class="bg-blue-600 rounded-md text-white font-bold px-10 py-3 text-lg hover:bg-blue-500"
        >
          Xác nhận
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "BookingTicket",
  setup() {
    const route = useRoute();

    const movieDetail = ref({});
    const rowSeats = ref([]);
    const cinemas = ref([]);
    const cinemaSelected = reactive({
      Name: "",
      isSelected: false,
      ShowTimes: [],
    });

    const foods = reactive([]);

    const order = reactive({
      CinemaName: "",
      Date: "",
      Time: "",
      SeatsList: [],
      Title: "",
      Poster: "",
      MoviePrice: 0,
      FoodPrice: 0,
      TotalPrice: 0,
    });

    // Fetch Movie by id
    fetch(`http://localhost:3000/movies/${route.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        movieDetail.value = data;
        order.Title = movieDetail.value.Title;
        order.Poster = movieDetail.value.Poster;
      });
    // Fetch Cinema
    fetch("http://localhost:3000/cinema")
      .then((response) => response.json())
      .then((data) => {
        rowSeats.value = data[0].SeatsList;
        cinemas.value = data;
      });
    // Fetch Foods
    fetch("http://localhost:3000/foods")
      .then((response) => response.json())
      .then((data) => {
        Object.assign(foods, data);
        foods.forEach((food) => {
          Object.assign(food, { Count: 0 });
        });
      });

    function cinemaSelect(cinema) {
      cinemaSelected.Name = cinema.Name;
      cinemaSelected.isSelected = true;
      cinemaSelected.ShowTimes = cinema.ShowTimes;

      // Clear date selected in other cinema
      order.Date = "";
      order.Time = "";

      cinemas.value.forEach((cinema) => {
        if (cinema.Name == cinemaSelected.Name) {
          rowSeats.value = cinema.SeatsList;
        }
      });
      order.CinemaName = cinemaSelected.Name;
    }

    function dateSelect(showTimes) {
      order.Date = showTimes.Date;
      order.Time = showTimes.Time;
    }

    function seatSelect(rowSeat, seat) {
      if (cinemaSelected.Name != "") {
        if (seat.Status == "Chưa chọn") {
          seat.Status = "Đã chọn";
          order.SeatsList.push({
            SeatName: rowSeat.SeatName,
            SeatNumber: seat.Number,
          });
          order.MoviePrice += rowSeat.Price;
        } else {
          seat.Status = "Chưa chọn";
          order.SeatsList.pop({
            SeatName: rowSeat.SeatName,
            SeatNumber: seat.Number,
          });
          order.MoviePrice -= rowSeat.Price;
        }
      }
    }

    function calculateTotal() {
      order.TotalPrice = order.MoviePrice + order.FoodPrice;
    }

    return {
      rowSeats,
      cinemas,
      cinemaSelected,
      order,
      foods,
      cinemaSelect,
      dateSelect,
      seatSelect,
      calculateTotal,
    };
  },
};
</script>
