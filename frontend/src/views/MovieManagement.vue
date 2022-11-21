<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white min-h-screen">
      <suspense>
        <admin-sidebar dashboard="movie" />
      </suspense>
    </div>
    <div class="col-span-5">
      <div class="container p-10 overflow-x-hidden">
        <div class="flex justify-between items-center mb-2">
          <h1 class="font-bold text-xl">Danh sách các bộ phim trong CSDL</h1>
          <router-link
            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
            :to="{ name: 'CreateMovieForm' }"
          >
            Thêm phim mới +
          </router-link>
        </div>
        <div class="mb-2 relative">
          <input
            class="w-1/2 h-10 border border-gray-600 rounded-md focus:outline-none px-2"
            placeholder="Nhập tên phim để tìm kiếm"
            type="search"
            v-model="searchQuery"
          />
          <i
            class="fa-solid fa-magnifying-glass absolute right-1/2 top-1/2 -translate-y-1/2 pr-2"
          ></i>
        </div>
        <div class="relative">
          <table class="w-full text-left">
            <thead class="font-bold text-gray-700 uppercase bg-gray-50">
              <tr>
                <th class="py-3 px-6">ID</th>
                <th class="py-3 px-6">Tên phim</th>
                <th></th>
                <th class="py-3 px-6">Poster</th>
                <th class="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(movie, index) in resultQuery"
                :key="movie._id"
                class="bg-white border-b"
              >
                <td class="py-4 px-6">{{ movie._id }}</td>
                <td
                  colspan="2"
                  class="py-4 px-6 font-bold text-gray-900 whitespace-nowrap"
                >
                  {{ movie.Title }}
                </td>
                <td class="py-4 px-6">
                  <img class="w-20" :src="movie.Poster" :alt="movie.Title" />
                </td>
                <td class="py-4 px-6">
                  <router-link
                    :to="{
                      name: 'MovieManagementEdit',
                      params: { id: movie._id },
                    }"
                    ><i
                      class="fa-solid fa-pen-to-square text-xl text-blue-500 pr-8"
                    ></i
                  ></router-link>
                  <a
                    class="cursor-pointer"
                    @click.prevent="deleteMovie(movie._id, index)"
                    ><i class="fa-solid fa-trash-can text-xl text-red-400"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import { nonAccentVietnamese } from "@/composables/nonAccentVietnamese";
import { ref, computed } from "vue";
export default {
  components: {
    AdminSidebar,
  },
  setup() {
    const movies = ref([]);
    const searchQuery = ref(null);
    const { toLowerCaseNonAccentVietnamese } = nonAccentVietnamese();

    fetch(`http://localhost:3000/api/movies`)
      .then((response) => response.json())
      .then((data) => (movies.value = data));

    async function deleteMovie(movieId, index) {
      await fetch(`http://localhost:3000/api/movies/${movieId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then(() => {
          movies.value.splice(index, 1);
        });
    }

    const resultQuery = computed(() => {
      if (searchQuery.value) {
        return movies.value.filter((movie) => {
          return toLowerCaseNonAccentVietnamese(movie.Title).includes(
            searchQuery.value
          );
        });
      } else {
        return movies.value;
      }
    });

    return {
      movies,
      resultQuery,
      searchQuery,
      deleteMovie,
    };
  },
};
</script>
