import React from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

const Contacts = ({ contacts }) => {
	return (
		<div className="container">
			<h1>Contact requests</h1>
			{contacts.map(contact => (
				<Contact key={contact.id} contact={contact} />
			))}
		</div>
	);
};

Contacts.propTypes = {
	contacts: PropTypes.array
};

export default Contacts;
