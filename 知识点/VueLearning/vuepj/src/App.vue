<template>
  <div id="app">
    <button @click="$store.commit('add',5)">+</button>
    <button @click="$store.commit('sub')">-</button>
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
