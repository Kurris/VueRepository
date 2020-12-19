import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.withCredentials = true;

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
