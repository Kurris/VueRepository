<template>
  <div id='app'>
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "./components/TabBar.vue";
import router from "./router/index.js";

export default {
  router,
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style>
</style>
