<template>
  <div id="app">
    <!-- store的基本使用 -->
    <button @click="$store.commit('add', 5)">+</button>
    <button @click="$store.commit('sub')">-</button>
    <button @click="testAsyncByAction">测试异步action</button>
    <button @click="$store.commit('testAsync')">测试异步</button>

    <!-- store中的module -->
    <button @click="test">222</button>
    <button @click="$store.commit('showName', '附加的名称')">显示名称</button>
    <li>模块的getters{{ this.$store.getters.fullName }}</li>

    <HelloWorld />

    <router-link to="/Home">主页</router-link>
    <router-link to="/About">关于</router-link>
    <router-link :to="'/User/' + uid">用户</router-link>
    <!-- <router-link
      :to="{ path: '/Profile', query: { name: 'ligy', age: 18, gender: '男' } }"
      >档案</router-link
    > -->

    <button @click="profileClick">档案</button>

    <keep-alive exclude="User">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      uid: "Ligy",
    };
  },
  methods: {
    profileClick() {
      if (this.$route.path != "/Profile") {
        this.$router.replace({
          path: "/Profile",
          query: { name: "ligy", age: 18, gender: "男" },
        });
      }
    },
    testAsyncByAction() {
      this.$store.dispatch("atestAsync", "这里是异步处理内容").then((res) => {
        console.log(res);
      });
    },
    test() {
      console.log("");
    },
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: red;
}
</style>
