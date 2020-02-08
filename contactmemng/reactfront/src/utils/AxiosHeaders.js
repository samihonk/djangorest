import axios from "axios";

export const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common["Authorization"] = token;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};

export const setCSRF = () => {
	axios.defaults.xsrfCookieName = "csrftoken";
	axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
};

export const setHeaderAppJson = () => {
	axios.defaults.headers.post["Content-Type"] = "application/json";
};
