import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Home = () => import('components/content/home/home.vue');
const Search = () => import('components/content/search/search.vue');
const Shop = () => import('components/content/shop/shop.vue');
const Msg = () => import('components/content/msg/msg.vue');

const routes = [
	{
		path: '',
		redirect: '/Home',
	},
	{
		path: '/Home',
		component: Home,
		meta: {
			title: '主页',
		},
	},
	{
		path: '/Shop',
		component: Shop,
		meta: {
			title: '商城',
		},
	},
	{
		path: '/Search',
		component: Search,
		meta: {
			title: '查找',
		},
	},
	{
		path: '/Msg',
		component: Msg,
		meta: {
			title: '我的信息',
		},
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

router.beforeEach((to, from, next) => {
	document.title = to.matched[0].meta.title;
	next();
});

export default router;
