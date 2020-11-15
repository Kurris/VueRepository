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
    - 使用 `replace` 标签属性指定底层使用 `history.replaceState(path)` 方法
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

- 路由守卫

  > 组件之间的"中间件"

  - 在`routes`数组中增加`meta`属性,增加`title`属性标记当前组件的标题,
    在路由中使用:

    ```js
    // 这里是路由守卫,属于"全局路由入口"
    router.beforeEach((to, from, next) => {
    	//修改标题,这里使用matched[0]是因为可能存在嵌套路由
    	document.title = to.matched[0].meta.title;
    	//没有next就不会进行下一步,类似于中间件
    	next();
    });
    ```

  - 在`routes`数组中的组件注册路由时,实现`beforeEnter`方法

    ```js
    beforeEnter: (to, from, next) => {
    	console.log('这里是About局部路由守卫');
    	next();
    },
    ```

  - 在组件自身实现`beforeRouteEnter`方法
    ```js
    beforeRouteEnter(to, from, next) {
    console.log("Home的组件路由守卫");
    next();
    },
    ```

- 路由 Keep-alive

  > 将路由保存存活状态,对组件只创建一次并缓存起来

  - 使用`Keep-alive`标签将组件显示的`router-view`包括起来
    ```html
    <keep-alive>
    	<router-view />
    </keep-alive>
    ```
  - 增加组件数据属性`currentPath`赋予默认值,并且在组件中实现 `activated` 方法和 `beforeRouteLeave` 方法,记得将路由中的默认导航注释`redirect`

    - 激活组件时,使用代码指定默认显示

    ```js
    activated() {
    this.$router.push(this.currentPath);
    },
    ```

    - 离开组件时,记录当前值

    ```js
    beforeRouteLeave(to, from, next) {
    this.currentPath = this.$route.path;
    next();
    },
    ```

    - 这样就能实现 Keep-alive 的效果,当然,如果没有 Keep-alive 的标签,
      `activated`和`deactivated`方法并不会实现

   <br>

  - 使用`exclude`/`include`,填入需要排除/包括 KeepAlive 的组件
    - 多个使用逗号隔开,中间不能有空格

## Vuex 状态管理(单例管理对象,可响应式)

- 安装 `npm install vuex --save`
- 创建文件夹``store,创建文件`index.js`

  ```js
  import Vue from 'vue';
  import Vuex from 'vuex';
  Vue.use(Vuex);

  const store = new Vuex.Store({
  	state: {
  		counter: 10,
  	},
  	mutations: {
  		add(state) {
  			state.counter++;
  		},
  		add(state, count) {
  			state.counter + count;
  		},
  		sub(state) {
  			state.counter--;
  		},
  	},
  	actions: {},
  	getters: {},
  	modules: {},
  });
  export default store;
  ```

- 通过在`mutations`中定义方法修改状态(可被跟踪)

  - 无参数`$store.commit('add')`
  - 带参数`$store.commit('add',5)`
  - 另一种风格: 此时`mutations`的方法接受的参数为对象

    ```js
    $store.commit({
    	type: 'add',
    	count,
    });
    ```

  - 如果`state`中存在数组数据,并且对它进行操作的时候,需要使用响应式方法

    - 改变一个键的值 `Vue.set`
    - 删除一个键 `Vue.delete`

  - 在`mutations`中的方法必须为同步方法,否则 devtools 可能追踪不到数据变化

- getter 类似于自动属性
