<template>
  <swiper
    :slidesPerView="6"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    autoplay="true"
    rewind="true"
    class="mySwiper"
  >
    <swiper-slide v-for="movie in movies" :key="movie._id" class="mt-5">
      <router-link :to="{ name: 'MovieDetail', params: { id: movie._id } }">
        <img :src="movie.Poster" alt="" />
        <h3 class="font-semibold text-center mt-2">{{ movie.Title }}</h3>
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "@/assets/css/global.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import { ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    movieStatus: null,
  },
  setup(props) {
    const movies = ref([]);

    fetch(`http://localhost:3000/api/movies`)
      .then((response) => response.json())
      .then((data) => {
        movies.value = data.filter((m) => {
          return m.Status == props.movieStatus;
        });
      });

    return {
      modules: [Pagination, Autoplay],
      movies,
    };
  },
};
</script>
