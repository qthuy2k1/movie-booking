<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-full">
      <suspense>
        <admin-sidebar dashboard="cinema" />
      </suspense>
    </div>
    <div class="col-span-5">
      <div class="container p-10 relative">
        <h1 class="font-bold text-xl mb-5">Chỉnh sửa thông tin phim</h1>
        <form action="" class="w-full relative" @submit.prevent="onSubmit()">
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="id"
              >Id</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-no-drop"
              type="text"
              v-model="cinema._id"
              id="id"
              disabled
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="name"
              >Tên rạp chiếu phim</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="cinema.Name"
              id="name"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="seats"
              >Seats</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              v-model="cinema.Seats"
              id="seats"
            />
          </div>

          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="cinema"
              >Đồ ăn có trong rạp</label
            >

            <input
              class="form-control block w-full px-3 py-1.5 text-left font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              value="Chọn các rạp"
              type="button"
              @click="showFoodsDropdown()"
              @click.once="bindingSelectedFoods()"
            />
            <div
              class="p-2 border border-gray-500 rounded-sm shadow-sm"
              v-if="showFoods"
            >
              <ul>
                <li v-for="food in foods" :key="food._id">
                  <input
                    type="checkbox"
                    :id="food._id"
                    :value="food"
                    v-model="foodsSelected"
                    :checked="food.checked ? 'checked' : null"
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
              Lưu
            </button>
            <button
              v-if="isPending"
              type="submit"
              class="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 cursor-not-allowed"
              disabled
            >
              Đang Lưu ...
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
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    AdminSidebar,
  },
  setup() {
    const route = useRoute();
    const cinema = ref({});
    const foods = ref([]);
    const showFoods = ref(false);
    const foodsSelected = ref([]);
    const msg = ref(null);
    const isPending = ref(null);

    fetch(`http://localhost:3000/api/movies/cinema/${route.params.id}`)
      .then((response) => response.json())
      .then((data) => (cinema.value = data));

    fetch(`http://localhost:3000/api/movies/cinema/foods`)
      .then((response) => response.json())
      .then((data) => (foods.value = data));

    function bindingSelectedFoods() {
      cinema.value.Foods.forEach((cinemaFoods) => {
        foods.value.forEach((food) => {
          if (cinemaFoods == food._id) {
            Object.assign(food, { checked: true });
            foodsSelected.value.push(food);
          }
        });
      });
    }

    function showFoodsDropdown() {
      showFoods.value = !showFoods.value;
    }

    async function onSubmit() {
      isPending.value = true;
      cinema.value.Foods = [...foodsSelected.value];
      try {
        await fetch(
          `http://localhost:3000/api/movies/cinema/${cinema.value._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...cinema.value }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            msg.value = "Cập nhật thông tin rạp chiếu thành công";
          });
      } catch (error) {
        msg.value = error.message;
      } finally {
        isPending.value = false;
      }
    }

    return {
      cinema,
      foods,
      showFoods,
      foodsSelected,
      msg,
      isPending,
      showFoodsDropdown,
      bindingSelectedFoods,
      onSubmit,
    };
  },
};
</script>
