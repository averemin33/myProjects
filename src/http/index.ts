import axios from 'axios';
import { links } from '../components/Routes/links';

const $host = axios.create({
	baseURL: links.API_URL,
	withCredentials: true,
});

const $authHost = axios.create({
	baseURL: links.API_URL,
	withCredentials: true,
	// headers: {
	// 	'Cache-Control': 'no-cache, no-store, must-revalidate',
	// 	'Pragma': 'no-cache',
	// 	'Expires': '0'
	// }
});

const authInterceptor = (config: any) => {
	config.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('tokenFile') || '')}`;
	return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
