<template>
  <navigation-header />
  <div class="max-w-7xl mx-auto my-12">
    <router-view />
  </div>
  <navigation-footer />
</template>

<script>
import NavigationHeader from "./components/NavigationHeader.vue";
import NavigationFooter from "./components/NavigationFooter.vue";
export default {
  name: "App",
  components: {
    NavigationHeader,
    NavigationFooter,
  },
};
</script>
