<template>
  <div id="Home">
    <navBar class="homebar">
      <div slot="center">首页</div>
    </navBar>

    <Swiper :options="swiperOption" class="swiper-container">
      <SwiperSlide class="swiper-item" v-for="item in getSwiperData()" :key="item.id">
        <img class="swiperimg" :src="item.banner" />
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>

    <recommendview :recommends="getRecommendData()" />
    <tabcontrol class="tab" :titles="['新款', '流行', '精选']" />
    <Goods :goods="getGoodDatas()" />

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navbar.vue";
import recommendview from "./recommend.vue";
import { swiperOption, Swiper, SwiperSlide, } from "components/common/swiper/swiperex.js";

import tabcontrol from "components/common/tabcontrol/tabcontrol.vue";

import { getSwiperData, getRecommendData, getGoodDatas } from "./home.js";
import Goods from "./good";

export default {
  name: "Home",
  components: {
    navBar,
    Swiper,
    SwiperSlide,
    recommendview,
    tabcontrol,
    Goods,
  },
  data() {
    return {
      swiperOption: swiperOption,
    };
  },
  methods: {
    getSwiperData() {
      return getSwiperData();
    },
    getRecommendData() {
      return getRecommendData();
    },
    getGoodDatas() {
      return getGoodDatas();
    },
  },
  mounted() { },
};
</script>
<style scoped>
.homebar {
  background-color: orange;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 9;
}

.swiperimg {
  width: 100%;
}

.swiper-container {
  margin-top: 44px;
}

.tab {
  position: sticky;
  top: 44px;
  background-color: white;
  z-index: 9;
}
</style>