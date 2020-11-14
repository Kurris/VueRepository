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
	},
	actions: {},
	getters: {},
	modules: {},
});
export default store;
