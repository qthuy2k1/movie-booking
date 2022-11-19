<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-full">
      <admin-sidebar dashboard="movie" />
    </div>
    <div class="col-span-5">
      <div class="container p-10 overflow-x-hidden">
        <h1 class="font-bold text-xl mb-5">Chỉnh sửa thông tin phim</h1>
        <form action="" class="w-full">
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="id"
              >Id</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              :value="movie._id"
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
              placeholder="Nhập tên phim"
              type="text"
              :value="movie.Title"
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
              placeholder="Nhập năm ra mắt"
              type="text"
              :value="movie.Year"
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
              placeholder="Nhập rated"
              type="text"
              :value="movie.Rated"
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
              placeholder="Nhập ngày, tháng ra mắt"
              type="text"
              :value="movie.Released"
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
              placeholder="Nhập thời lượng phim"
              type="text"
              :value="movie.Runtime"
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
              placeholder="Nhập thể loại"
              type="text"
              :value="movie.Genres"
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
              placeholder="Nhập tên đạo diễn"
              type="text"
              :value="movie.Directors"
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
              placeholder="Nhập tên diễn viên"
              type="text"
              :value="movie.Actors"
              id="actors"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="plot"
              >Nội dung phim</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Nhập nội dung phim"
              type="text"
              :value="movie.Plot"
              id="plot"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="languages"
              >Ngôn ngữ</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Nhập ngôn ngữ"
              type="text"
              :value="movie.Language"
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
              placeholder="Nhập link poster"
              type="text"
              :value="movie.Poster"
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
              placeholder="Nhập link banner"
              type="text"
              :value="movie.Banner"
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
              placeholder="Nhập link trailer"
              type="text"
              :value="movie.Trailer"
              id="trailer"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="cinema"
              >Chiếu tại rạp</label
            >
            <div
              class="relative"
              :click="(isShowCheckboxes = !isShowCheckboxes)"
            >
              <select
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option class="">Chọn các rạp</option>
              </select>
              <div class="absolute left-0 right-0 bottom-0 top-0"></div>
            </div>
            <div class="checkBoxes flex flex-col px-4 py-2 bg-gray-200">
              <label
                v-for="cinema in movie.Cinema"
                :key="cinema._id"
                :for="cinema._id"
                class="py-1"
                ><input
                  type="checkbox"
                  :value="cinema.Name"
                  :id="cinema._id"
                  class="mr-2"
                />{{ cinema.Name }}</label
              >
            </div>
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
    // const isShowCheckboxes = ref(false);

    fetch(`http://localhost:3000/api/movies/${route.params.id}`)
      .then((response) => response.json())
      .then((data) => (movie.value = data));
    return {
      movie,
    };
  },
};
</script>
