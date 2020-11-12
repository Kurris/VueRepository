<template>
  <div class="hello">
    <h1>这是主页</h1>
    <router-link to="/Home/News">新闻</router-link>
    <router-link to="/Home/Message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: "/Home/News",
    };
  },

  created() {
    console.log("Home");
  },
  beforeRouteEnter(to, from, next) {
    console.log("Home的组件路由守卫");
    next();
  },

  activated() {
    this.$router.push(this.currentPath);
  },
  beforeRouteLeave(to, from, next) {
    this.currentPath = this.$route.path;
    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
