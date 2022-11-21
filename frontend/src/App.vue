<template>
  <div v-if="meta.isFullLayout">
    <navigation-header />
    <div class="max-w-7xl mx-auto my-12">
      <router-view />
    </div>
    <navigation-footer />
  </div>
  <div v-else>
    <suspense><router-view /></suspense>
  </div>
</template>

<script>
import NavigationHeader from "./components/NavigationHeader.vue";
import NavigationFooter from "./components/NavigationFooter.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "App",
  components: {
    NavigationHeader,
    NavigationFooter,
  },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
