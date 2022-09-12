<template>
  <h1 class="text-4xl text-dark uppercase font-semibold mb-6">
    Phim đang chiếu
  </h1>
  <movie-item />
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";
export default {
  name: "NowShowing",
  components: {
    MovieItem,
  },
};
</script>
