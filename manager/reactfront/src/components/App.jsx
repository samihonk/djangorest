import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Header from "./layout/Header";
import Form from "./contact/Form";
import Contacts from "./contact/Contacts";
import Login from "./auth/Login";
import HomePage from "./layout/HomePage";
import PrivateRoute from "./routing/PrivateRoute";
import ContactState from "../context/contact/ContactState";
import AuthState from "../context/auth/AuthState";
import { setAuthToken } from "../utils/AxiosHeaders";
import { hot } from "react-hot-loader";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<Router>
					<Header />
					<Switch className="container">
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/sendMessage">
							<Form />
						</Route>
						<PrivateRoute exact path="/messages">
							<Contacts />
						</PrivateRoute>
						<Route exact path="/login">
							<Login />
						</Route>
						<Redirect to="/" />
					</Switch>
				</Router>
			</ContactState>
		</AuthState>
	);
};

export default hot(module)(App);
