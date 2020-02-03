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
import ContactState from "../context/contact/ContactState";
import { hot } from "react-hot-loader";

const App = () => {
	return (
		<ContactState>
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
		</ContactState>
	);
};

export default hot(module)(App);
