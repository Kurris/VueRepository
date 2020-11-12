<template>
  <div id='tabbar'>
    <!-- <TabBarItem>
      <img slot='item-icon-active' src='../assets/img/tabbar/yy-advisory.svg' />
      <img slot='item-icon' src='../assets/img/tabbar/yy-advisory-O.svg' />
      <div slot='item-text'>咨询</div>
    </TabBarItem>

    <TabBarItem >
      <img slot='item-icon-active' src='../assets/img/tabbar/yy-shoppingcart.svg' />
      <img slot='item-icon' src='../assets/img/tabbar/yy-shoppingcart-O.svg' />
      <div slot='item-text'>商店</div>
    </TabBarItem>-->

    <TabBarItem path='/Search'>
      <img slot='item-icon-active' src='../assets/img/tabbar/yy-search.svg' />
      <img slot='item-icon' src='../assets/img/tabbar/yy-search-O.svg' />
      <div slot='item-text'>搜索</div>
    </TabBarItem>

    <TabBarItem path='/Home'>
      <img slot='item-icon-active' src='../assets/img/tabbar/yy-home.svg' />
      <img slot='item-icon' src='../assets/img/tabbar/yy-home-O.svg' />
      <div slot='item-text'>主页</div>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";

export default {
  name: "TabBar",
  components: {
    TabBarItem,
  },
};
</script>
<style scoped>
@import "../assets/css/tabbar.css";

#tabbar {
  display: flex;
  background-color: antiquewhite;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: azure;
}
</style>
