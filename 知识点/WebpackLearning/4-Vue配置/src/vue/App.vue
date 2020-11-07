<!--  -->
<template>
  <div class="">
    <button class="aaa" @click.stop="btnclick">{{ btnName }}</button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "App",
  components: {},
  data() {
    return {
      btnName: "按钮名称",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    btnclick() {
      console.log("按钮响应");
    },
  },
};
</script>
<style scoped>

.aaa{
   color: yellow;
}
</style>