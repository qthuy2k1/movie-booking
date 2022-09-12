<template>
  <div class="grid grid-cols-4 gap-2">
    <div
      class="w-72 mb-6 cursor-pointer group relative hover:shadow-md pb-4 rounded-lg"
      v-for="movie in movies"
      :key="movie.id"
    >
      <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
        <img class="w-full h-96" :src="movie.Poster" alt="" />
        <div class="mt-3 mb-2 mx-2">
          <h3 class="font-bold uppercase group-hover:text-red-400 text-lg mb-1">
            {{ movie.Title }}
          </h3>
          <p class="capitalize">
            <strong>Thể Loại:</strong> {{ movie.Genres }}
          </p>
          <p><strong>Thời Lượng:</strong> {{ movie.Runtime }}</p>
          <p><strong>Khởi Chiếu:</strong> {{ movie.Released }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const movies = ref([]);

    fetch("http://localhost:3000/movies?_limit=8&_sort=id&_order=desc")
      .then((response) => response.json())
      .then((data) => {
        movies.value = data;
      });

    return { movies };
  },
};
</script>
