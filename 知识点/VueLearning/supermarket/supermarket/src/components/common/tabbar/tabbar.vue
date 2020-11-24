<template>
  <div id="tabbar">
    <TabBarItem path="/Home">
      <img slot="itemiconactive" src="~assets/img/tabbar/yy-home.svg" />
      <img slot="itemicon" src="~assets/img/tabbar/yy-home-O.svg" />
      <div slot="itemtext">主页</div>
    </TabBarItem>

    <TabBarItem path="/Shop">
      <img slot="itemiconactive" src="~assets/img/tabbar/yy-shoppingcart.svg" />
      <img slot="itemicon" src="~assets/img/tabbar/yy-shoppingcart-O.svg" />
      <div slot="itemtext">商城</div>
    </TabBarItem>

    <TabBarItem path="/Search">
      <img slot="itemiconactive" src="~assets/img/tabbar/yy-search.svg" />
      <img slot="itemicon" src="~assets/img/tabbar/yy-search-O.svg" />
      <div slot="itemtext">搜索</div>
    </TabBarItem>

    <TabBarItem path="/Msg">
      <img slot="itemiconactive" src="~assets/img/tabbar/yy-advisory.svg" />
      <img slot="itemicon" src="~assets/img/tabbar/yy-advisory-O.svg" />
      <div slot="itemtext">信息</div>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./tabbaritem";

export default {
  name: "tabbar",
  components: {
    TabBarItem,
  },
};
</script>
<style scoped>
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
