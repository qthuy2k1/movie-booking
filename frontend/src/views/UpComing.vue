<template>
  <h1 class="text-4xl text-dark uppercase font-semibold mb-6 mt-28">
    Phim sắp chiếu
  </h1>
  <movie-item movieStatus="Sắp chiếu" />
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";
export default {
  name: "UpComing",
  components: {
    MovieItem,
  },
};
</script>
