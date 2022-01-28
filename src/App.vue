<template>
  <div className="px-3 font-body text-sm">
    <Header v-if="!isLogin" />
    <router-view :key="$route.fullPath" />
    <Footer v-if="!isLogin" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";
export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const isLogin = computed(() => route.name === "HomeView");

    return {
      isLogin,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
