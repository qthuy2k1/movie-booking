<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-full">
      <suspense>
        <admin-sidebar dashboard="movie" />
      </suspense>
    </div>
    <div class="col-span-5">
      <div class="container p-10 relative">
        <h1 class="font-bold text-xl">Thêm phim mới</h1>

        <form action="" class="w-full relative" @submit.prevent="onSubmit()">
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="title"
              >Tên phim</label
            >
            <input
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Title"
              placeholder="Nhập tên phim"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Year"
              placeholder="Nhập năm sản xuất phim"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Rated"
              placeholder="Nhập rated"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Released"
              placeholder="Nhập ngày, tháng ra mắt phim"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Runtime"
              placeholder="Nhập thời lượng phim"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Genres"
              placeholder="Nhập thể loại phim"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Directors"
              placeholder="Nhập tên đạo diễn"
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
              v-model="newMovie.Actors"
              placeholder="Nhập tên diễn viên"
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
              v-model="newMovie.Plot"
              placeholder="Nhập nội dung phim"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Language"
              placeholder="Nhập ngôn ngữ"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Poster"
              placeholder="Nhập link poster"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Banner"
              placeholder="Nhập link banner"
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
              required
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newMovie.Trailer"
              placeholder="Nhập link trailer"
              id="trailer"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="status"
              >Trạng thái</label
            >
            <select
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              v-model="newMovie.Status"
              id="status"
            >
              <option value="Đang chiếu">Đang chiếu</option>
              <option value="Sắp chiếu">Sắp chiếu</option>
            </select>
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="cinema"
              >Chiếu tại rạp</label
            >

            <input
              required
              class="form-control block w-full px-3 py-1.5 text-left font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              value="Chọn các rạp"
              type="button"
              @click="showDropdown"
            />
            <div
              class="p-2 border border-gray-500 rounded-sm shadow-sm"
              v-if="show"
            >
              <ul>
                <li v-for="cinema in cinemas" :key="cinema._id">
                  <input
                    required
                    type="checkbox"
                    :id="cinema._id"
                    :value="cinema._id"
                    v-model="cinemaSelected"
                  />
                  <label :for="cinema._id">{{ cinema.Name }}</label>
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
              Tạo
            </button>
            <button
              v-if="isPending"
              type="submit"
              class="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 cursor-not-allowed"
            >
              Đang Tạo ...
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
import router from "@/router";
import { ref } from "vue";
export default {
  components: {
    AdminSidebar,
  },
  setup() {
    const msg = ref(null);
    const newMovie = ref({});
    const show = ref(false);
    const cinemas = ref([]);
    const cinemaSelected = ref([]);
    const isPending = ref(null);

    function showDropdown() {
      show.value = !show.value;
    }

    fetch(`http://localhost:3000/api/movies/cinema`)
      .then((response) => response.json())
      .then((data) => (cinemas.value = data));

    async function onSubmit() {
      isPending.value = true;
      newMovie.value.Cinema = [...cinemaSelected.value];
      try {
        await fetch(`http://localhost:3000/api/movies/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...newMovie.value }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            msg.value = "Thêm mới phim thành công";
            router.back();
          });
      } catch (error) {
        msg.value = error.message;
      } finally {
        isPending.value = false;
      }
    }

    return {
      show,
      cinemas,
      newMovie,
      msg,
      cinemaSelected,
      showDropdown,
      onSubmit,
    };
  },
};
</script>
