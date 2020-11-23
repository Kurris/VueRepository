<template>
  <div class="hello">
    <h2>这是用户</h2>
    <li>{{ $route.params.UserId }}</li>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      uid: this.$route.params.UserId,
    };
  },
  activated() {
    console.log("User被激活");
  },
  created() {
    console.log("User被创建");
  },
  destroyed() {
    console.log("User被销毁");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
