import config from "../config";
import { useFetch } from "nuxt/app";

class ApiService {
	constructor(loader = true) {
		this.loader = loader;
		this.baseUrl = `${config.app.server.scheme}://${config.app.server.host}${config.app.server.path}`;
	}

	sendForm(data) {
		return this.request('/send-tigor-form', data, 'POST');
	}

	async request(url, data = null, method = 'GET') {
		let params = {
			method: method
		};

		if (data) {
			params.body = data;
		}

		const response = await useFetch(this.baseUrl + url, params);

		return response.data.value;
	}
}

export default ApiService;