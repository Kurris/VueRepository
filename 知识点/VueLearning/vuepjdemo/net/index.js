import axios from 'axios';

axios.defaults.baseURL = 'http://123.207.32.32:8000';

axios.interceptors.request.use(
	config => {
		// 请求前处理,如果不返回,则请求异常
		return config;
	},
	err => {
		console.log(err);
	}
);

axios.interceptors.response.use(
	config => {
		return config.data;
	},
	err => {
		console.log(err);
	}
);

export default function request(config) {
	return axios(config);
}
