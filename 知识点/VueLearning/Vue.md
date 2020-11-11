# Vue 知识点

## 脚手架

- 安装(全局) `npm install @vue/cli -g`

- 查看版本 `vue --version`

- 初始化脚手架项目

  1.  cli3 `vue create proj-name`

  2.  cli2 `vue init webpack proj-name`

## Router

- 简单使用

  - 安装 `npm intall vue-router --save`
  - 创建文件夹 router,创建 index.js 文件
  - 导入对象,vue 注册全局 router 对象
  - router 增加映射关系,缺省页还有路由模式为 history

    ```js
    import vueRouter from 'vue-router';
    import vue from 'vue';
    import Home from '../components/Home.vue';
    import About from '../components/About.vue';

    vue.use(vueRouter);
    const routes = [
    	{
    		path: '',
    		redirect: '/Home',
    	},
    	{
    		path: '/Home',
    		component: Home,
    	},
    	{
    		path: '/About',
    		component: About,
    	},
    ];
    const router = new vueRouter({
    	routes,
    	mode: 'history',
    	linkActiveClass: 'active',
    });
    export default router;
    ```

  - 要点说明
    - 使用 `router-link to='/Home'`标签属性 重定向到主页
    - 使用 `router-view` 标签 指示显示的位置
    - 使用 `replace` 标签属性指定底层使用 `replaceState` 方法
    - 使用 `linkActiveClass: 'active'`的 `vue-router` 属性指定选中样式
    - 使用 `tag` 标签属性指示渲染的样式,例如渲染成 `button`/`li`
    - 使用 `this.$router.push/replace('/Home')`在代码中重定向

- 动态路由

  - 在 `routes` 数组中增加
    ```js
    {
    	path: '/User/:UserId',
    	component: User,
    },
    ```
  - 导入 `User` 组件,并且在上述的数组中注册
  - 在原格式的`/User`后面添加`/:UserId`,其中`UserId` 为占位符
  - 使用 `v-bind` 绑定 `to` 属性
    ```html
    <router-link :to="'/User/'+uid">用户</router-link>
    ```
  - 在子组件 User 中的模板代码中使用`$route.params.UserId`获取
    或者在代码中使用`t`his.\$route.params.UserId`

- 懒加载路由

  ```js
  import User from '../components/User.vue';
  const User = () => import('../components/User.vue');
  ```

- 嵌套路由

  - 在父路由组件中添加属性` children: []`,增加路由
  - 子路由不需要前缀"/"
  - 在使用时需要把父路由和子路由拼接一起

- 路由传递参数
  - 通过占位符的参数方式 `/User/:UserId`,`$route.params.UserId`
  - 通过 query 的方式, `$route.query.参数名`
