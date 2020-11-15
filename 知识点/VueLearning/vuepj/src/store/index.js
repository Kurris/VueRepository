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
		sub(state) {
			state.counter--;
		},
		//此处使用setTimeout会有异步操作,devtools可能追踪不到变化结果
		testAsync(state) {
			setTimeout(() => {
				state.counter++;
			}, 1000);
		},
		testAsyncByAction(state) {
			state.counter++;
		},
	},
	actions: {
		atestAsync(context, payload) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit('testAsyncByAction');
					resolve(payload);
				}, 2000);
			});
		},
	},
	getters: {},
	modules: {},
});
export default store;
