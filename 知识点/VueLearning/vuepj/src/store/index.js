import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const ModuleA = {
	state: {
		name: 'Ligy',
	},
	mutations: {
		showName(state, payload) {
			console.log(state.name + '  ' + payload);
		},
	},
	getters: {
		fullName(state, rootGetters, rootState) {
			return state.name + rootGetters.counterAddOne + rootState.counter;
		},
	},
	actions: {},
};

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
	getters: {
		counterAddOne(state) {
			return state.counter + 1;
		},
	},
	modules: {
		a: ModuleA,
	},
});
export default store;
