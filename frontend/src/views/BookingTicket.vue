<template>
  <div class="bg-black py-2 text-2xl text-white text-center font-bold mt-28">
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
        :key="cinema._id"
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
    <div class="w-3/4 mx-auto mt-24 flex flex-col items-center">
      <div v-for="rowSeat in rowSeats" :key="rowSeat._id">
        <button
          v-for="seat in rowSeat.SeatNumber"
          :key="seat"
          class="border border-red-600 w-9 ml-4 mb-2 hover:bg-red-400 hover:text-white"
          :class="[
            rowSeat.Type == 'VIP' ? 'bg-yellow-100' : null,
            seat.Status == 'Đã đặt'
              ? '!bg-red-600 text-white cursor-not-allowed'
              : null,
            seat.Status == 'Đã chọn' ? '!bg-red-400 text-white' : null,
          ]"
          @click.prevent="seatSelect(rowSeat, seat)"
        >
          {{ rowSeat.SeatName }}{{ seat.Number }}
        </button>
      </div>

      <div class="mt-12 flex">
        <div class="flex mr-6">
          <button
            @click.prevent=""
            class="border border-red-600 w-9 mr-2 h-full"
          ></button>
          Chưa chọn
        </div>
        <div class="flex mr-6">
          <button
            @click.prevent=""
            class="border bg-red-400 w-9 mr-2 h-full"
          ></button>
          Đã chọn
        </div>
        <div class="flex mr-6">
          <button
            @click.prevent=""
            class="border bg-red-600 w-9 mr-2 h-full"
          ></button>
          Đã đặt
        </div>
        <div class="flex mr-6">
          <button
            @click.prevent=""
            class="border bg-yellow-100 w-9 mr-2 h-full"
          ></button>
          VIP
        </div>
      </div>
    </div>

    <!-- Select food -->
    <div class="bg-black py-2 text-2xl text-white text-center font-bold mt-12">
      <h2>Bắp nước</h2>
    </div>

    <div class="grid grid-cols-2 gap-5">
      <div v-for="food in foods" :key="food._id" class="grid grid-cols-4 mt-5">
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
                if (food.Quantiy == null || food.Quantiy == 0) {
                  food.Quantiy = 0;
                } else {
                  food.Quantiy--;
                  order.FoodPrice -= food.Price;
                }
              "
            >
              -
            </button>
            <span
              class="border border-black inline-block w-8 h-6 text-center mx-3"
              >{{ food.Quantiy != null ? food.Quantiy : 0 }}</span
            >
            <button
              class="bg-red-600 px-2 text-white hover:bg-red-500"
              @click.prevent="
                food.Quantiy == null || food.Quantiy == 0
                  ? (food.Quantiy = 1)
                  : food.Quantiy++;
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
        <img :src="movieDetail.Poster" alt="" class="w-52 mr-12" />
        <div class="text-white">
          <h3 class="font-bold text-2xl mb-4">{{ order.Title }}</h3>
          <p>
            <strong>Chỗ Ngồi: </strong>
            <span v-for="seat in order.SeatsList" :key="seat"
              >{{ seat }},
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

          <form class="pay-form">
            <strong>Chọn phương thức thanh toán: </strong>
            <label class="pl-5 pr-2" for="atm">Thanh toán bằng ATM</label>
            <input type="radio" value="atm" id="atm" name="pay" />
            <label class="pl-5 pr-2" for="momo">Thanh toán bằng MOMO</label>
            <input type="radio" value="MOMO" id="momo" name="pay" />
            <label class="pl-5 pr-2" for="cash">Thanh toán tại quầy</label>
            <input type="radio" value="cash" id="cash" name="pay" checked />
          </form>
        </div>
      </div>
      <div class="flex justify-end w-full">
        <button
          v-if="!isPending"
          @click.prevent="createOrder()"
          class="bg-blue-600 rounded-md text-white font-bold px-10 py-3 text-lg hover:bg-blue-500"
        >
          Xác nhận
        </button>
        <button
          class="bg-gray-800 text-white px-4 py-2 rounded-lg mt-4 cursor-not-allowed"
          v-else
          disabled
        >
          Đang đặt vé...
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUser } from "@/composables/useUser";
export default {
  name: "BookingTicket",
  setup() {
    const route = useRoute();
    const router = useRouter();

    // for updating seatlist status
    let showtimesId = "";

    const isPending = ref(false);

    const { getUser } = useUser();

    const { user } = getUser();

    const movieDetail = ref({});
    const rowSeats = ref([]);
    const cinemas = ref([]);
    const cinemaSelected = reactive({
      Name: "",
      isSelected: false,
      ShowTimes: [],
    });

    const foods = ref([]);

    const order = reactive({
      CinemaName: "",
      Date: "",
      Time: "",
      SeatsList: [],
      Title: "",
      MoviePrice: 0,
      FoodPrice: 0,
      TotalPrice: 0,
      UserID: user.value.uid,
    });

    // Fetch Movie by id
    fetch(`http://localhost:3000/api/movies/${route.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        movieDetail.value = data;

        data.Cinema.forEach((cinema) => {
          cinemas.value.push(cinema);
        });
        rowSeats.value = data.Cinema[0].ShowTimes[0].SeatList;

        // rowSeats.value = data.Cinema[0];
        order.Title = movieDetail.value.Title;
      });

    function cinemaSelect(cinema) {
      // Clear seat selected
      order.SeatsList = [];

      // Clear foods value
      foods.value = [];

      cinemaSelected.id = cinema._id;
      cinemaSelected.Name = cinema.Name;
      cinemaSelected.isSelected = true;
      cinemaSelected.ShowTimes = cinema.ShowTimes;

      // Clear date selected in other cinema
      order.Date = "";
      order.Time = "";

      cinemas.value.forEach((cinema) => {
        if (cinema.Name == cinemaSelected.Name) {
          rowSeats.value = cinema.ShowTimes.SeatList;
        }
      });

      order.CinemaName = cinemaSelected.Name;

      // Get foods are sold in cinema
      foods.value = movieDetail.value.Cinema.find(
        (c) => c.Name == order.CinemaName
      ).Foods;

      // Add number of quantity to foods
      foods.value.forEach((food) => {
        Object.assign(food, { Quantiy: 0 });
      });
    }

    function dateSelect(showTimes) {
      // Clear seat selected in reciept
      order.SeatsList = [];
      order.MoviePrice = 0;

      order.Date = showTimes.Date;
      order.Time = showTimes.Time;

      rowSeats.value = cinemas.value
        .find((c) => c.Name == order.CinemaName)
        .ShowTimes.find(
          (t) => t.Date == order.Date && t.Time == order.Time
        ).SeatList;

      showtimesId = cinemas.value
        .find((c) => c.Name == order.CinemaName)
        .ShowTimes.find((t) => t.Date == order.Date && t.Time == order.Time);

      // clear seat selected in select
      rowSeats.value.forEach((rowSeat) => {
        rowSeat.SeatNumber.forEach((seat) => {
          seat.Status == "Đã chọn" ? (seat.Status = "Chưa chọn") : null;
        });
      });
    }

    function seatSelect(rowSeat, seat) {
      if (cinemaSelected.Name != "") {
        if (seat.Status == "Đã đặt") {
          return;
        } else if (seat.Status == "Chưa chọn") {
          seat.Status = "Đã chọn";
          order.SeatsList.push(rowSeat.SeatName + seat.Number);
          order.MoviePrice += rowSeat.Price;
        } else {
          seat.Status = "Chưa chọn";
          order.SeatsList.pop(rowSeat.SeatName + seat.Number);
          order.MoviePrice -= rowSeat.Price;
        }
      }
    }

    function calculateTotal() {
      order.TotalPrice = order.MoviePrice + order.FoodPrice;
    }

    async function createOrder() {
      if (
        document.querySelectorAll(".pay-form input:checked")[0].value ==
          "cash" &&
        order.MoviePrice != 0
      ) {
        try {
          await fetch(`http://localhost:3000/api/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              MovieTitle: order.Title,
              CinemaName: order.CinemaName,
              Date: order.Date,
              Time: order.Time,
              SeatNumber: [...order.SeatsList],
              Price: order.TotalPrice,
              UserID: user.value.uid,
              Status: "Chưa thanh toán",
            }),
          })
            .then((response) => response.json())
            .then(() => {
              isPending.value = true;
            })
            .then(async () => {
              await fetch(
                `http://localhost:3000/api/movies/${cinemaSelected.id}/seatlist`,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    id: showtimesId,
                    SeatNumber: [...order.SeatsList],
                    Status: "Đã đặt",
                  }),
                }
              )
                .then((response) => response.json())
                .then((data) => console.log(data));

              router.push({
                name: "UserOrders",
                params: { msg: "Đặt vé thành công" },
              });
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Chọn ghế và phương thức thanh toán là tiền mặt");
      }
    }

    return {
      isPending,
      rowSeats,
      cinemas,
      cinemaSelected,
      order,
      foods,
      movieDetail,
      user,
      cinemaSelect,
      dateSelect,
      seatSelect,
      calculateTotal,
      createOrder,
    };
  },
};
</script>
