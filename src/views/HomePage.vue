<template>
  <div class="w-3/4 mx-auto">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <img
          class="w-full h-[500px]"
          v-if="movie.Banner != null"
          :src="movie.Banner"
          alt=""
        />
      </swiper-slide>
    </swiper>
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

// Import Swiper styles
export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const movies = ref([]);

    fetch(`http://localhost:3000/movies`)
      .then((response) => response.json())
      .then((data) => (movies.value = data));

    return {
      onSwiper,
      onSlideChange,
      movies,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
