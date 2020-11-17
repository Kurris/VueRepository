import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

import  request  from '../net/index';

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app');

// axios({
// 	url: 'http://123.207.32.32:8000/home/multidata',
// })
// 	.then(res => {
// 		console.log(res);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

request({
	url: '/home/multidata',
}).then(res => {
	console.log(res);
});
