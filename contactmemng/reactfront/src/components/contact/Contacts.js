import React, { useContext, useEffect } from "react";
import Contact from "./Contact";
import ContactContext from "../../context/contact/ContactContext";
import AuthContext from "../../context/auth/AuthContext";

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const authContext = useContext(AuthContext);
	const { contacts, getContacts } = contactContext;
	const { isAuthenticated } = authContext;

	useEffect(() => {
		isAuthenticated ? getContacts() : null;
	}, []);

	return (
		<div className="container">
			<h1>Contact requests</h1>
			{contacts.map(contact => (
				<Contact key={contact.id} contact={contact} />
			))}
		</div>
	);
};

export default Contacts;
