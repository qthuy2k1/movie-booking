<template>
  <h1 class="text-2xl font-bold py-8 text-center">DASHBOARD</h1>
  <ul class="flex flex-col relative">
    <li
      class="border border-gray-300 cursor-pointer flex justify-between items-center"
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
      class="border border-gray-300 cursor-pointer flex justify-between items-center"
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
      class="border border-gray-300 cursor-pointer flex justify-between items-center"
      :class="dashboard == 'employee' ? 'bg-blue-600' : null"
    >
      <router-link
        to="/admin/employee-management"
        class="block px-4 py-4 hover:bg-blue-600 w-full"
        >Quản lý nhân viên</router-link
      >
      <i class="fa-solid fa-chevron-right right-4 absolute"></i>
    </li>
    <li
      class="border border-gray-300 cursor-pointer flex justify-between items-center"
      :class="dashboard == 'ticket' ? 'bg-blue-600' : null"
    >
      <router-link
        to="/admin/ticket-statistic"
        class="block px-4 py-4 hover:bg-blue-600 w-full"
        >Thống kê vé</router-link
      >
      <i class="fa-solid fa-chevron-right right-4 absolute"></i>
    </li>
    <!-- <li
      class="border border-gray-300 cursor-pointer flex justify-between items-center"
    >
      <a href="">Đăng xuất</a>
      <i class="fa-solid fa-right-from-bracket"></i>
    </li> -->
  </ul>
</template>

<script>
export default {
  props: {
    dashboard: null,
  },
};
</script>
