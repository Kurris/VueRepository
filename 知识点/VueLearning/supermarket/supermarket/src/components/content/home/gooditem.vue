<template>
  <div class="GoodItem">
    <div>
      <img :src="img" alt="" />
    </div>
    <div>
      <p>价钱:{{ price }}元</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodItem",
  props: {
    img: {
      type: String,
      request: true,
    },
    price: {
      type: Number,
      request: true,
    },
  },
};
</script>
<style scoped>
.GoodItem {
  text-align: center;
}

.GoodItem img {
  height: 160px;
  width: 140px;
}

.GoodItem p {
  font-size: 5px;
}
</style>