import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/Home.vue');
const Search = () => import('../views/search/Search.vue');

Vue.use(VueRouter);

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
		path: '/Search',
		component: Search,
	},
];
const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
