<template>
  <div class='tabbar-item' @click='itemClick'>
    <div v-if='isActive'>
      <slot name='item-icon-active'></slot>
    </div>
    <div v-else>
      <slot name='item-icon'></slot>
    </div>
    <div :class='{ active: isActive }'>
      <slot name='item-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",

  props: {
    path: {
      type: String,
      default: "/Home",
    },
  },
  data() {
    return {
      // isActive: false,
    };
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
  components: {},
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