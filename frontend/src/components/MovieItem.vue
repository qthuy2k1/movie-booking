<template>
  <h1 v-if="searchQuery != undefined" class="mb-2 font-semibold text-xl">
    Kết quả tìm kiếm cho "{{ searchQuery }}"
  </h1>
  <div class="grid grid-cols-4 gap-2">
    <div
      class="w-72 mb-6 cursor-pointer group relative hover:shadow-md pb-4 rounded-lg"
      v-for="movie in resultQuery"
      :key="movie._id"
    >
      <router-link :to="{ name: 'MovieDetail', params: { id: movie._id } }">
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
import { nonAccentVietnamese } from "@/composables/nonAccentVietnamese";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  props: {
    movieStatus: null,
  },
  setup(props) {
    const route = useRoute();

    const movies = ref([]);
    const { toLowerCaseNonAccentVietnamese } = nonAccentVietnamese();

    fetch("http://localhost:3000/api/movies/")
      .then((response) => response.json())
      .then((data) => {
        movies.value = data.filter((m) => {
          return m.Status == props.movieStatus;
        });
      });

    const searchQuery = computed(() => {
      return route.query.search;
    });

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

    return { movies, resultQuery, searchQuery };
  },
};
</script>
