<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-screen">
      <admin-sidebar dashboard="movie" />
    </div>
    <div class="col-span-5">
      <div class="container p-10 overflow-x-hidden">
        <h1 class="font-bold text-xl mb-5">Danh sách các bộ phim trong CSDL</h1>
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
                v-for="movie in movies"
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
                  <a href=""
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
import { ref } from "vue";
export default {
  components: {
    AdminSidebar,
  },
  setup() {
    const movies = ref([]);

    fetch(`http://localhost:3000/api/movies`)
      .then((response) => response.json())
      .then((data) => (movies.value = data));

    return {
      movies,
    };
  },
};
</script>
