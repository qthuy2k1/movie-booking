<template>
  <div>
    <h1 class="text-4xl text-dark uppercase font-semibold mb-6">
      Nội dung phim
    </h1>

    <div class="mx-auto w-2/3 mb-12 relative">
      <iframe
        :src="movieDetail.trailer"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-[850px] h-[478px] max-w-4xl"
        id="videoTrailer"
      ></iframe>
    </div>

    <!-- Movie details -->
    <div>
      <div class="grid grid-cols-8 gap-x-10">
        <div class="w-full col-span-2">
          <img :src="movieDetail.Poster" alt="" class="w-full" />
        </div>
        <div class="col-span-6">
          <h1 class="uppercase text-2xl font-bold">{{ movieDetail.Title }}</h1>
          <hr class="my-3" />
          <p class=""><strong>Nội dung:</strong> {{ movieDetail.Plot }}</p>
          <p><strong>Đạo diễn:</strong> {{ movieDetail.Directors }}</p>
          <p><strong>Diễn viên:</strong> {{ movieDetail.Actors }}</p>
          <p><strong>Thể loại:</strong> {{ movieDetail.Genres }}</p>
          <p><strong>Khởi chiếu:</strong> {{ movieDetail.Released }}</p>
          <p><strong>Thời lượng:</strong> {{ movieDetail.Runtime }}</p>
          <p><strong>Ngôn ngữ:</strong> {{ movieDetail.Language }}</p>
          <p><strong>Rated:</strong> {{ movieDetail.Rated }}</p>
          <button
            class="uppercase bg-blue-600 text-white font-semibold px-32 py-2 rounded-lg mt-3 text-lg hover:bg-blue-500"
            @click="
              this.$router.push({
                name: 'BookingTicket',
                params: { title: movieDetail.Title },
              })
            "
          >
            Mua Vé
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
  name: "MovieDetail",
  setup() {
    const movieDetail = ref({});
    const route = useRoute();
    fetch(`http://localhost:3000/Movies`)
      .then((response) => response.json())
      .then(
        (data) => (movieDetail.value = data[parseInt(route.params.id) - 1])
      );

    return {
      route,
      movieDetail,
    };
  },
};
</script>
