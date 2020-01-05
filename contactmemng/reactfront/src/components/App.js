import React, { Component, Fragment } from "react";
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
			<Fragment>
				<Header />
				<div className="container">
					<Form submitMessage={this.submitMessage} />
					<Contacts contacts={this.state.contacts} />
				</div>
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
