<template>
  <div class="w-3/4 mx-auto mt-28">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="movie in movies" :key="movie._id">
        <img
          class="w-full h-[500px]"
          v-if="movie.Banner != null"
          :src="movie.Banner"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>

  <div class="now-showing-slider mt-14">
    <h1 class="font-bold text-2xl">Phim đang chiếu</h1>
    <home-page-slider></home-page-slider>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ref } from "vue";

import HomePageSlider from "@/components/HomePageSlider.vue";

// Import Swiper styles
export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
    HomePageSlider,
  },
  setup() {
    const movies = ref([]);

    fetch(`http://localhost:3000/api/movies`)
      .then((response) => response.json())
      .then((data) => (movies.value = data));

    return {
      movies,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
