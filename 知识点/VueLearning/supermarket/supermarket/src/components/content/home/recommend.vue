<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <img class="recommend-img" :src="item.img" alt="" />
      <div style="text-align: center">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      request: true,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  font-size: 10px;
  margin-top: 5px;
  border-bottom: 6px solid #e9e0e0;
  text-align: center;
}
.recommend-item {
  flex: 1px;
}

.recommend-img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
</style>