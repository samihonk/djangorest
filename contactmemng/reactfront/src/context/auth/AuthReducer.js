import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	USER_LOADED,
	AUTH_ERROR
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				token: action.payload.token,
				isAuthenticated: true
			};
		case LOGIN_FAIL:
		case AUTH_ERROR:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null,
				error: action.payload
			};
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			};
		default:
			return state;
	}
};
