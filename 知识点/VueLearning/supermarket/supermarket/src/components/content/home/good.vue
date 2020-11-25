<template>
  <div class="good">
    <div class="item" v-for="item in goods" :key="item.id">
      <GoodItem :img="item.img" :price="item.price" />
    </div>
  </div>
</template>

<script>
import GoodItem from "./gooditem";

export default {
  components: {
    GoodItem,
  },
  props: {
    goods: {},
  },
};
</script>
<style scoped>
.good {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  border-radius: 5px;
}
</style>