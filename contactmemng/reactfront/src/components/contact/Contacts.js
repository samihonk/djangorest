import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import axios from "axios";

const Contacts = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		axios
			.get("/api/contacts/")
			.then(res => {
				const sort = res.data.sort((a, b) => {
					return new Date(b.create_time) - new Date(a.create_time);
				});
				setContacts(sort);
			})
			.catch(err => console.log(err));
		// eslint-disable-next-line
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
