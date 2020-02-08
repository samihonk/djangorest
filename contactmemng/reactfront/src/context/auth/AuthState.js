import React, { useReducer } from "react";
import axios from "axios";
import {
	setAuthToken,
	setCSRF,
	setHeaderAppJson
} from "../../utils/AxiosHeaders";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	USER_LOADED,
	AUTH_ERROR
} from "../types";
import PropTypes from "prop-types";

const AuthState = props => {
	const initialState = {
		user: null,
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		error: null
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	const loadUser = () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		setCSRF();
		setHeaderAppJson();
		axios
			.get("/api/auth/user")
			.then(res => {
				dispatch({ type: USER_LOADED, payload: res.data });
			})
			.catch(err => {
				dispatch({ type: AUTH_ERROR, payload: err.data });
			});
	};

	const login = loginForm => {
		setCSRF();
		setHeaderAppJson();
		axios
			.post("/api/auth/login", loginForm)
			.then(res => {
				dispatch({
					type: LOGIN_SUCCESS,
					payload: res.data
				});
			})
			.then(() => {
				loadUser();
			})
			.catch(err => {
				dispatch({
					type: LOGIN_FAIL,
					payload: err.response.data
				});
			});
	};

	const logout = () => {
		setCSRF();
		setHeaderAppJson();
		axios
			.post("/api/auth/login")
			.then(() => {
				dispatch({
					type: LOGOUT
				});
			})
			.catch(err => console.log(err));
	};

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				error: state.error,
				login,
				loadUser,
				logout
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

AuthState.propTypes = {
	children: PropTypes.any
};

export default AuthState;
