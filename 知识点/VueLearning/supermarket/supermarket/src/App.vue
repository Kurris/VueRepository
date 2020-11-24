<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <mainBar />
  </div>
</template>

<script>
import mainBar from "components/common/tabbar/tabbar.vue";
import router from "router/index.js";

export default {
  router,
  name: "App",
  components: {
    mainBar,
  },
};
</script>

<style>
</style>
