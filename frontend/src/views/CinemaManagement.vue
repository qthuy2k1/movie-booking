<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-screen">
      <admin-sidebar dashboard="cinema" />
    </div>
    <div class="col-span-5">
      <h1>Quản lý rạp chiếu phim</h1>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
export default {
  components: {
    AdminSidebar,
  },
};
</script>
