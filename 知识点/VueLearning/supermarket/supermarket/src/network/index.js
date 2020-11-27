import axios from 'axios';

export default function http(config) {
	const instance = axios.create();

	instance.interceptors.request.use(
		config => {
			return config;
		},
		err => {
			console.log(err);
		}
	);

	instance.interceptors.response.use(
		res => {
			return res.data;
		},
		err => {
			console.log(err);
		}
	);

	return instance(config);
}
