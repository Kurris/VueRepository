<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="itemiconactive"></slot>
    </div>
    <div v-else>
      <slot name="itemicon"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="itemtext"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",

  props: {
    path: {
      type: String,
      default: "/Home",
    },
  },
  computed: {
    isActive() {     
     return this.$route.path.indexOf(this.path) != -1;
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((x) => {});
    },
  },
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  margin-top: 3px;
  color: black;
}

.tabbar-item img {
  height: 20px;
  width: 20px;
  vertical-align: middle;
}

.active {
  color: orangered;
}
</style>