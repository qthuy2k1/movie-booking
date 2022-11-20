<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-screen">
      <admin-sidebar dashboard="cinema" />
    </div>
    <div class="col-span-5">
      <div class="container p-10 overflow-x-hidden">
        <div class="flex justify-between items-center mb-2">
          <h1 class="font-bold text-xl">
            Danh sách các rạp chiếu phim trong CSDL
          </h1>
          <router-link
            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
            :to="{ name: 'CreateCinemaForm' }"
          >
            Thêm rạp phim mới +
          </router-link>
        </div>
        <div class="mb-2 relative">
          <input
            class="w-1/2 h-10 border border-gray-600 rounded-md focus:outline-none px-2"
            placeholder="Nhập để tìm kiếm"
            type="text"
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
                <th class="py-3 px-6">Tên rạp chiếu phim</th>
                <th></th>
                <th class="py-3 px-6">Số ghế</th>
                <th class="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(cinema, index) in cinemas"
                :key="cinema._id"
                class="bg-white border-b"
              >
                <td class="py-4 px-6">{{ cinema._id }}</td>
                <td
                  colspan="2"
                  class="py-4 px-6 font-bold text-gray-900 whitespace-nowrap"
                >
                  {{ cinema.Name }}
                </td>
                <td class="py-4 px-6">
                  {{ cinema.Seats }}
                </td>
                <td class="py-4 px-6">
                  <router-link
                    :to="{
                      name: 'CinemaManagementEdit',
                      params: { id: cinema._id },
                    }"
                    ><i
                      class="fa-solid fa-pen-to-square text-xl text-blue-500 pr-8"
                    ></i
                  ></router-link>
                  <a
                    class="cursor-pointer"
                    @click.prevent="deleteCinema(cinema._id, index), reload()"
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
import { computed, ref } from "vue";
export default {
  components: {
    AdminSidebar,
  },
  setup() {
    const cinemas = ref([]);
    const searchQuery = ref(null);

    fetch(`http://localhost:3000/api/movies/cinema`)
      .then((response) => response.json())
      .then((data) => (cinemas.value = data));

    async function deleteCinema(cinemaId, index) {
      await fetch(`http://localhost:3000/api/cinemas/${cinemaId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then(() => {
          cinemas.value.splice(index, 1);
        });
    }

    const resultQuery = computed(() => {
      if (searchQuery.value) {
        return cinemas.value.filter((cinema) => {
          return searchQuery.value
            .toLowerCase()
            .split(" ")
            .every((v) => cinema.Name.toLowerCase().includes(v));
        });
      } else {
        return cinemas;
      }
    });

    return {
      cinemas,
      deleteCinema,
      resultQuery,
      searchQuery,
    };
  },
};
</script>
