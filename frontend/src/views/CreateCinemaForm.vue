<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-full">
      <suspense>
        <admin-sidebar dashboard="movie" />
      </suspense>
    </div>
    <div class="col-span-5">
      <div class="container p-10 relative">
        <h1 class="font-bold text-xl">Thêm rạp chiếu phim mới</h1>

        <form action="" class="w-full relative" @submit.prevent="onSubmit()">
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="title"
              >Tên rạp chiếu</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newCinema.Name"
              placeholder="Nhập rạp chiếu"
              id="title"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="seats"
              >Số ghế</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="newCinema.Seats"
              placeholder="Nhập số ghế ngồi"
              id="seats"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="foods"
              >Đồ ăn</label
            >

            <input
              class="form-control block w-full px-3 py-1.5 text-left font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              value="Chọn đồ ăn"
              type="button"
              @click="showDropdown"
            />
            <div
              class="p-2 border border-gray-500 rounded-sm shadow-sm"
              v-if="show"
            >
              <ul>
                <li v-for="food in foods" :key="food._id">
                  <input
                    type="checkbox"
                    :id="food._id"
                    :value="food._id"
                    v-model="foodsSelected"
                  />
                  <label :for="food._id">{{ food.Name }}</label>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-red-400 font-semibold" v-if="msg">{{ msg }}</div>

          <div class="relative py-8">
            <button
              v-if="!isPending"
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Tạo
            </button>
            <button
              v-if="isPending"
              type="submit"
              class="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 cursor-not-allowed"
            >
              Đang Tạo ...
            </button>
            <button
              class="bg-red-500 text-white px-4 py-2 rounded-md"
              @click.prevent="$router.back()"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import router from "@/router";
import { ref } from "vue";
export default {
  components: {
    AdminSidebar,
  },
  setup() {
    const msg = ref(null);
    const newCinema = ref({});
    const show = ref(false);
    const foods = ref([]);
    const foodsSelected = ref([]);
    const isPending = ref(null);

    function showDropdown() {
      show.value = !show.value;
    }

    fetch(`http://localhost:3000/api/movies/cinema/foods`)
      .then((response) => response.json())
      .then((data) => (foods.value = data));

    async function onSubmit() {
      isPending.value = true;
      newCinema.value.Foods = [...foodsSelected.value];
      try {
        await fetch(`http://localhost:3000/api/movies/cinema`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...newCinema.value }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            msg.value = "Thêm mới rạp chiếu phim thành công";
            router.back();
          });
      } catch (error) {
        msg.value = error.message;
      } finally {
        isPending.value = false;
      }
    }

    return {
      show,
      newCinema,
      msg,
      foods,
      foodsSelected,
      showDropdown,
      onSubmit,
    };
  },
};
</script>
