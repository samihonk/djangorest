import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Form from "./contact/Form";
import axios from "axios";

class App extends Component {
  submitMessage = ({ title, email, message }) => {
    axios
      .post("/api/contacts/", { title, email, message })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container" style={{ padding: "4px" }}>
          <Form submitMessage={this.submitMessage} />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
