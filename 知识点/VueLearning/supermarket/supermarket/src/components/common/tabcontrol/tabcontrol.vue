<template>
  <div class="tabcontrol">
    <div
      :class="{ item: true, active: currentIndex == index }"
      v-for="(item, index) in titles"
      @click="currentIndex = index"
      :key="index"
    >
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
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
.tabcontrol {
  display: flex;
  text-align: center;
}
.item {
  flex: 1px;
  margin-top: 5px;
  line-height: 30px;
  height: 35px;
}

.active {
  color: orange;
  border-bottom: 2px solid orange;
}
</style>