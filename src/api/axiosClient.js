import axios from "axios";
import queryString from "query-string";
import firebase from "firebase";

// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const baseUrl = "https://js-post-api.herokuapp.com/api";
const axiosClient = axios.create({
	baseURL: baseUrl,
	headers: {
		"content-type": "application/json",
	},
	paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
	// Handle token here ...
	const currentUser = firebase.auth().currentUser;
	if (currentUser) {
		const token = await currentUser.getIdToken();
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		// Handle errors
		throw error;
	}
);
export default axiosClient;
