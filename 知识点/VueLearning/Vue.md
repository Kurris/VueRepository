# Vue 知识点

## 脚手架

- 安装(全局) `npm install @vue/cli -g`

- 查看版本 `vue --version`

- 初始化脚手架项目
	1. cli3 `vue create proj-name`

	2. cli2 `vue init webpack proj-name`

## Router
- 安装 `npm intall vue-router --save`

- 创建文件夹router,创建index.js文件
	
- 导入对象,vue注册全局router对象
	
- router增加映射关系,缺省页还有路由模式为history
	
	```js
	import vueRouter from "vue-router";
	import vue from "vue";
	import Home from "../components/Home.vue";
	import About from "../components/About.vue";
	vue.use(vueRouter);
  const routes = [{
        path: "",
        redirect: "/Home"
    },
    {
        path: "/Home",
        component: Home
    },
    {
        path: "/About",
        component: About
	  }
];
	
  const router = new vueRouter({
    routes,
	  mode: "history"
});
	
	export default router;
	```
	
- 使用router-link to="/Home"重定向到主页

- 使用router-view 指示显示的位置

- 使用replace属性指定底层使用replaceStates方法

- 使用linkActiveClass: "active"指定选中样式

- 使用tag指示渲染的样式

- 使用this.$router.push/replace("/Home")代码跳转

