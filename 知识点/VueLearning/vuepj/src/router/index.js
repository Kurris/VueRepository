import vueRouter from 'vue-router';
import vue from 'vue';

// import Home from '../components/Home.vue';
// import About from '../components/About.vue';
// import User from '../components/User.vue';

const Home = () => import('../components/Home.vue');
const About = () => import('../components/About.vue');
const User = () => import('../components/User.vue');
const HomeMessage = () => import('../components/HomeMessage.vue');
const HomeNews = () => import('../components/HomeNews.vue');

const Profile = () => import('../components/Profile.vue');

vue.use(vueRouter);

const routes = [
	{
		path: '',
		redirect: '/Home',
	},
	{
		path: '/User/:UserId',
		component: User,
	},
	{
		path: '/Home',
		component: Home,
		children: [
			{
				path: '',
				redirect: 'News',
			},
			{
				path: 'Message',
				component: HomeMessage,
			},
			{
				path: 'News',
				component: HomeNews,
			},
		],
	},
	{
		path: '/About',
		component: About,
	},
	{
		path: '/Profile',
		component: Profile,
	},
];

const router = new vueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active',
});

export default router;
