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
		meta: {
			title: '用户',
		},
	},
	{
		path: '/Home',
		component: Home,
		meta: {
			title: '首页',
		},
		children: [
			// {
			// 	path: '',
			// 	redirect: 'News',
			// },
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
		meta: {
			title: '关于',
		},
		beforeEnter: (to, from, next) => {
			console.log('这里是About局部路由守卫');
			next();
		},
	},
	{
		path: '/Profile',
		component: Profile,
		meta: {
			title: '档案',
		},
	},
];

const router = new vueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active',
});

// 这里是路由守卫
router.beforeEach((to, from, next) => {
	document.title = to.matched[0].meta.title;
	//没有next就不会进行下一步,类似于中间件
	next();
});

export default router;
