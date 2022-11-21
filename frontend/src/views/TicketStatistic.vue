<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-screen">
      <suspense>
        <admin-sidebar dashboard="ticket" />
      </suspense>
    </div>
    <div class="col-span-5">
      <h1>Thống kê</h1>
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
