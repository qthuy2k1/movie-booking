<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-full">
      <suspense>
        <admin-sidebar dashboard="movie" />
      </suspense>
    </div>
    <div class="col-span-5">
      <div class="container p-10 relative">
        <h1 class="font-bold text-xl mb-5">Chỉnh sửa thông tin phim</h1>
        <form action="" class="w-full relative" @submit.prevent="onSubmit()">
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="id"
              >Id</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-no-drop"
              type="text"
              v-model="movie._id"
              id="id"
              disabled
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="title"
              >Tên phim</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Title"
              id="title"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="year"
              >Năm ra mắt</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Year"
              id="year"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="rated"
              >Rated</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Rated"
              id="rated"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="released"
              >Ngày, tháng ra mắt</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Released"
              id="released"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="runtime"
              >Thời lượng</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Runtime"
              id="runtime"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="genres"
              >Thể loại</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Genres"
              id="genres"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="directors"
              >Đạo diễn</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Directors"
              id="directors"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="actors"
              >Tên diễn viên</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Actors"
              id="actors"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="plot"
              >Nội dung phim</label
            >
            <textarea
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              rows="5"
              type="text"
              v-model="movie.Plot"
              id="plot"
            ></textarea>
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="languages"
              >Ngôn ngữ</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Language"
              id="languages"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="poster"
              >Poster</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Poster"
              id="poster"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="banner"
              >Banner</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Banner"
              id="banner"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="trailer"
              >Trailer</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="movie.Trailer"
              id="trailer"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="cinema"
              >Chiếu tại rạp</label
            >

            <input
              class="form-control block w-full px-3 py-1.5 text-left font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              value="Chọn các rạp"
              type="button"
              @click="showCinemaDropdown()"
              @click.once="bindingSelectedCinema()"
            />
            <div
              class="p-2 border border-gray-500 rounded-sm shadow-sm"
              v-if="showCinema"
            >
              <ul>
                <li v-for="cinema in cinemas" :key="cinema._id">
                  <input
                    type="checkbox"
                    :id="cinema._id"
                    :value="cinema"
                    v-model="cinemaSelected"
                    :checked="cinema.checked ? 'checked' : null"
                  />
                  <label :for="cinema._id">{{ cinema.Name }}</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="cinema"
              >Thời gian chiếu</label
            >

            <input
              class="form-control block w-full px-3 py-1.5 text-left font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              value="Chọn thời gian chiếu"
              type="button"
              @click="showTimeDropdown"
            />
            <div
              class="p-2 border border-gray-500 rounded-sm shadow-sm"
              v-if="showShowTime"
            >
              <ul>
                <li v-for="(cinema, index) in cinemaSelected" :key="index">
                  <div
                    v-for="(showtime, indexShowTime) in cinema.ShowTimes"
                    :key="indexShowTime"
                  >
                    <input
                      type="checkbox"
                      :id="showtime.Date + showtime.Time"
                      :value="showtime.Date + ' ' + showtime.Time"
                      v-model="showTimeSelected"
                      :checked="showtime.checked ? 'checked' : null"
                      :disabled="showtime.Selected ? 'disabled' : null"
                    />
                    <label :for="showtime.Date + showtime.Time">{{
                      showtime.Date + " - " + showtime.Time
                    }}</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-red-400 font-semibold" v-if="msg">{{ msg }}</div>

          <div class="relative py-8">
            <button
              v-if="!isPending"
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Lưu
            </button>
            <button
              v-if="isPending"
              type="submit"
              class="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 cursor-not-allowed"
              disabled
            >
              Đang Lưu ...
            </button>
            <button
              class="bg-red-500 text-white px-4 py-2 rounded-md"
              @click.prevent="$router.back()"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    AdminSidebar,
  },
  setup() {
    const route = useRoute();
    const movie = ref({});
    const cinemas = ref([]);
    const showCinema = ref(false);
    const showShowTime = ref(false);
    const cinemaSelected = ref([]);
    const showTimeSelected = ref([]);
    const msg = ref(null);
    const isPending = ref(null);

    fetch(`http://localhost:3000/api/movies/${route.params.id}`)
      .then((response) => response.json())
      .then((data) => (movie.value = data));

    fetch(`http://localhost:3000/api/movies/cinema`)
      .then((response) => response.json())
      .then((data) => (cinemas.value = data));

    function bindingSelectedCinema() {
      movie.value.Cinema.forEach((movieCinema) => {
        cinemas.value.forEach((cinema) => {
          if (movieCinema._id == cinema._id) {
            Object.assign(cinema, { checked: true });
            cinemaSelected.value.push(cinema);
          }
        });
      });
    }

    function showCinemaDropdown() {
      showCinema.value = !showCinema.value;
    }
    function showTimeDropdown() {
      showShowTime.value = !showShowTime.value;
    }

    async function onSubmit() {
      isPending.value = true;
      movie.value.Cinema = [...cinemaSelected.value];
      try {
        await fetch(`http://localhost:3000/api/movies/${movie.value._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...movie.value }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            msg.value = "Cập nhật thông tin phim thành công";
          });
      } catch (error) {
        msg.value = error.message;
      } finally {
        isPending.value = false;
      }
    }

    return {
      cinemas,
      movie,
      showCinema,
      showShowTime,
      cinemaSelected,
      showTimeSelected,
      msg,
      isPending,
      showCinemaDropdown,
      showTimeDropdown,
      bindingSelectedCinema,
      onSubmit,
    };
  },
};
</script>
