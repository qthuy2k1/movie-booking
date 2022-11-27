<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-screen">
      <suspense>
        <admin-sidebar dashboard="employee" />
      </suspense>
    </div>
    <div class="col-span-5">
      <div class="container p-10 overflow-x-hidden">
        <h1 class="font-bold text-xl">Danh sách nhân viên</h1>
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
              v-model="employee._id"
              id="id"
              disabled
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="email"
              >Email</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-no-drop"
              type="text"
              v-model="employee.email"
              id="email"
              disabled
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="Name"
              >Tên</label
            >
            <input
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-no-drop"
              type="text"
              v-model="employee.displayName"
              id="Name"
              disabled
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-label inline-block mb-2 text-gray-700 font-bold"
              for="id"
              >Quyền</label
            >
            <select
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              v-model="employee.role"
            >
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
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
    const employee = ref({});
    const route = useRoute();
    const msg = ref(null);
    const isPending = ref(false);
    fetch(`http://localhost:3000/api/roles/${route.params.id}`)
      .then((response) => response.json())
      .then((data) => (employee.value = data));

    async function onSubmit() {
      isPending.value = true;
      try {
        await fetch(`http://localhost:3000/api/roles/${employee.value._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            role: employee.value.role,
          }),
        })
          .then((response) => response.json())
          .then(() => {
            msg.value = "Sửa quyền nhân viên thành công";
          });
      } catch (err) {
        msg.value = err;
      } finally {
        isPending.value = false;
      }
    }

    return { employee, msg, isPending, onSubmit };
  },
};
</script>
