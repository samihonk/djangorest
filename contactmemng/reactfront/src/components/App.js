import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Form from "./contact/Form";
import Contacts from "./contact/Contacts";
import axios from "axios";

class App extends Component {
	state = {
		contacts: []
	};

	componentDidMount() {
		axios
			.get("/api/contacts/")
			.then(res => this.setState({ contacts: res.data }))
			.catch(err => console.log(err));
	}

	submitMessage = ({ title, email, message }) => {
		axios
			.post("/api/contacts/", { title, email, message })
			.then(res => {
				this.setState({ contacts: [...this.state.contacts, res.data] });
				console.log(res);
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Router>
				<Header />
				<Switch className="container">
					<Route
						exact
						path="/"
						render={() => (
							<Form submitMessage={this.submitMessage} />
						)}
					></Route>
					<Route
						exact path="/messages"
						render={() => (
							<Contacts contacts={this.state.contacts} />
						)}
					></Route>
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
