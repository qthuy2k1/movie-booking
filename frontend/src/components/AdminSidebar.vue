<template>
  <div class="fixed w-[254px]">
    <h1 class="text-2xl font-bold pt-8 pb-2 text-center">DASHBOARD</h1>
    <h3 class="text-center pb-6">
      Xin chào, <span class="text-yellow-200">{{ username }}</span>
    </h3>
    <ul class="flex flex-col relative">
      <li
        class="border-2 border-gray-300 cursor-pointer flex justify-between items-center"
        :class="dashboard == 'movie' ? 'bg-blue-600' : null"
      >
        <router-link
          to="/admin/movie-management"
          class="block px-4 py-4 hover:bg-blue-600 w-full"
          >Quản lý phim</router-link
        >
        <i class="fa-solid fa-chevron-right right-4 absolute"></i>
      </li>
      <li
        class="border-b-2 border-gray-300 cursor-pointer flex justify-between items-center"
        :class="dashboard == 'cinema' ? 'bg-blue-600' : null"
      >
        <router-link
          to="/admin/cinema-management"
          class="block px-4 py-4 hover:bg-blue-600 w-full"
          >Quản lý rạp chiếu phim</router-link
        >
        <i class="fa-solid fa-chevron-right right-4 absolute"></i>
      </li>
      <li
        class="border-b-2 border-gray-300 cursor-pointer flex justify-between items-center"
        :class="dashboard == 'employee' ? 'bg-blue-600' : null"
        v-if="isAcess"
      >
        <router-link
          to="/admin/employee-management"
          class="block px-4 py-4 hover:bg-blue-600 w-full"
          >Quản lý nhân viên</router-link
        >
        <i class="fa-solid fa-chevron-right right-4 absolute"></i>
      </li>
      <li
        class="border-b-2 border-gray-300 cursor-pointer flex justify-between items-center"
        :class="dashboard == 'orders' ? 'bg-blue-600' : null"
      >
        <router-link
          to="/admin/orders-management"
          class="block px-4 py-4 hover:bg-blue-600 w-full"
          >Quản lý hóa đơn</router-link
        >
        <i class="fa-solid fa-chevron-right right-4 absolute"></i>
      </li>
      <li
        class="border-b-2 border-gray-300 cursor-pointer flex justify-between items-center"
      >
        <a class="block px-4 py-4 hover:bg-blue-600 w-full" @click="signOut()"
          >Đăng xuất</a
        >
        <i class="fa-solid fa-right-from-bracket right-3 absolute"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { useSignOut } from "@/composables/useSignOut";
import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";
export default {
  props: {
    dashboard: null,
  },
  async setup() {
    const { signOut } = useSignOut();
    const isAcess = ref(false);
    const role = ref("");
    const username = ref(projectAuth.currentUser.displayName);
    try {
      role.value = await fetch(
        `http://localhost:3000/api/roles/${projectAuth.currentUser.uid}`
      )
        .then((response) => response.json())
        .then((data) => {
          return data.role;
        });
      if (role.value == "admin") {
        isAcess.value = true;
      } else {
        isAcess.value = false;
      }
    } catch (err) {
      isAcess.value = false;
    }

    return {
      role,
      signOut,
      isAcess,
      username,
    };
  },
};
</script>
