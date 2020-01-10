import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Header from "./layout/Header";
import Form from "./contact/Form";
import Contacts from "./contact/Contacts";
import { hot } from "react-hot-loader";

const App = () => {
	return (
		<Router>
			<Header />
			<Switch className="container">
				<Route exact path="/">
					<Form />
				</Route>
				<Route exact path="/messages">
					<Contacts />
				</Route>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
};

export default hot(module)(App);
