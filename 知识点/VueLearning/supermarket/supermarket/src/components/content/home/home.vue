<template>
  <div>
    <navBar class="homebar">
   <div slot="center">首页</div>
    </navBar>
    <h2>Home</h2>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navbar.vue";

export default {
  name: "Home",
  components: {
    navBar,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
.homebar{
  background-color: sandybrown;
  
}
</style>