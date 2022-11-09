<template>
  <div class="col-span-1">
    <ul class="flex flex-col mt-4">
      <li
        class="border border-gray-300 py-2 pl-3 hover:bg-gray-300 cursor-pointer"
        :class="dashboard == 'profile' ? 'bg-gray-300' : null"
      >
        <router-link to="/user-profile"> Thông tin tài khoản </router-link>
      </li>
      <li
        class="border border-gray-300 py-2 pl-3 hover:bg-gray-300 cursor-pointer"
        :class="dashboard == 'orders' ? 'bg-gray-300' : null"
      >
        <router-link to="/user-orders">Hóa đơn của bạn</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dashboard: null,
  },
};
</script>
