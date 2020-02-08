import React, { useContext, useEffect } from "react";
import Contact from "./Contact";
import ContactContext from "../../context/contact/ContactContext";

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts, getContacts } = contactContext;

	useEffect(() => {
		getContacts();
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
