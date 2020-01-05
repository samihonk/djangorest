import React from "react";
import PropTypes from "prop-types";

const Contact = ({ contact: { title, email, message } }) => {
	return (
		<div
			className="container"
			style={{
				marginTop: "2px",
				padding: "4px",
				border: "solid",
				borderWidth: "1px",
				borderColor: "white"
			}}
		>
			<div>Title: {title}</div>
			<div>Email: {email}</div>
			<div style={{ whiteSpace: "pre" }}>Message: {message}</div>
		</div>
	);
};

Contact.propTypes = {
	contact: PropTypes.object
};

export default Contact;
