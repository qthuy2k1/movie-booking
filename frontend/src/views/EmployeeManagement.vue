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
          <router-link
            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
            :to="{ name: 'CreateEmployeeForm' }"
          >
            Thêm nhân viên +
          </router-link>
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
                <th class="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(employee, index) in resultQuery"
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
                  {{ employee.role }}
                </td>
                <td class="py-4 px-6">
                  <router-link
                    :to="{
                      name: 'EmployeeManagementEdit',
                      params: { id: employee._id },
                    }"
                    ><i
                      class="fa-solid fa-pen-to-square text-xl text-blue-500 pr-8"
                    ></i
                  ></router-link>
                  <a
                    class="cursor-pointer"
                    @click.prevent="deleteRole(employee._id, index)"
                    ><i class="fa-solid fa-trash-can text-xl text-red-400"></i
                  ></a>
                </td>
              </tr>
            </tbody>
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
    const employees = ref([]);
    const users = ref([]);
    const searchQuery = ref(null);

    users.value = await fetch(`http://localhost:3000/api/roles`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    employees.value = users.value.filter((user) => {
      return user.role == "admin" || user.role == "employee";
    });

    async function deleteRole(userId, index) {
      await fetch(`http://localhost:3000/api/roles/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "user",
        }),
      })
        .then((response) => response.json())
        .then(() => {
          employees.value.splice(index, 1);
        });
    }

    const resultQuery = computed(() => {
      if (searchQuery.value) {
        return employees.value.filter((employee) => {
          return employee.displayName.toLowerCase().includes(searchQuery.value);
        });
      } else {
        return employees.value;
      }
    });

    return {
      employees,
      deleteRole,
      resultQuery,
      searchQuery,
    };
  },
};
</script>
