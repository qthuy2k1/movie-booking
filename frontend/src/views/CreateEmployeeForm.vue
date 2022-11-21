<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-screen">
      <suspense>
        <admin-sidebar dashboard="employee" />
      </suspense>
    </div>
    <div class="col-span-5">
      <div class="container p-10 overflow-x-hidden">
        <div class="flex justify-between items-center mb-2">
          <h1 class="font-bold text-xl">Danh sách nhân viên</h1>
        </div>
        <div class="mb-2 relative">
          <input
            class="w-1/2 h-10 border border-gray-600 rounded-md focus:outline-none px-2"
            placeholder="Nhập tên để tìm kiếm"
            type="text"
            v-model="searchQuery"
          />
          <i
            class="fa-solid fa-magnifying-glass absolute right-1/2 top-1/2 -translate-y-1/2 pr-2"
          ></i>
        </div>
        <div class="relative">
          <table class="w-full text-left">
            <thead class="font-bold text-gray-700 uppercase bg-gray-50">
              <tr>
                <th class="py-3 px-6">User ID</th>
                <th class="py-3 px-6">Email</th>
                <th class="py-3 px-6">Tên nhân viên</th>
                <th class="py-3 px-6">Quyền</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="employee in resultQuery"
                :key="employee._id"
                class="bg-white border-b"
              >
                <td class="py-4 px-6">{{ employee._id }}</td>
                <td class="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">
                  {{ employee.email }}
                </td>
                <td class="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">
                  {{ employee.displayName }}
                </td>
                <td class="py-4 px-6">
                  <select
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="employee.role"
                  >
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                    <option value="user">User</option>
                  </select>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <div class="text-red-400 font-semibold" v-if="msg">
                    {{ msg }}
                  </div>

                  <div class="relative py-8">
                    <button
                      @click="onSubmit()"
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
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import { computed, ref } from "vue";
export default {
  components: {
    AdminSidebar,
  },
  async setup() {
    const usersHasRoleUser = ref([]);
    const allUsers = ref([]);
    const searchQuery = ref(null);
    const isPending = ref(false);
    const msg = ref(null);
    const userChangedRole = ref([]);

    allUsers.value = await fetch(`http://localhost:3000/api/roles`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    usersHasRoleUser.value = allUsers.value.filter((user) => {
      return user.role == "user";
    });

    async function onSubmit() {
      isPending.value = true;
      userChangedRole.value = usersHasRoleUser.value.filter((user) => {
        return user.role != "user";
      });
      try {
        await fetch(`http://localhost:3000/api/roles/`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([...userChangedRole.value]),
        }).then((response) =>
          response.json().then((data) => console.log(data))
        );
        msg.value = "Thêm mới nhân viên thành công";
      } catch (err) {
        msg.value = err;
      } finally {
        isPending.value = false;
      }
    }

    const resultQuery = computed(() => {
      if (searchQuery.value) {
        return usersHasRoleUser.value.filter((user) => {
          return user.displayName.toLowerCase().includes(searchQuery.value);
        });
      } else {
        return usersHasRoleUser.value;
      }
    });

    return {
      usersHasRoleUser,
      msg,
      resultQuery,
      searchQuery,
      isPending,
      onSubmit,
    };
  },
};
</script>
