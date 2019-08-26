import axios from 'axios';

// https://ejoya-mvp.herokuapp.com/api/v1
//https://api.ejoya.co/api/v1/tracks/
const Ejoya = axios.create({
	baseURL: 'https://api.ejoya.co/api/v1',
});

Ejoya.interceptors.request.use(
	config => {
		const token = JSON.parse(localStorage.getItem('AUTH_TOKEN'));

		if (token) {
			config.headers['Authorization'] = `JWT ${token}`;
		}
		return config;
	},
	error => {
		console.log('ERROR', error.status);
	}
);

export default Ejoya;
