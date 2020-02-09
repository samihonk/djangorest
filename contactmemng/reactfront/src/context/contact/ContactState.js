import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import { GET_CONTACTS, CLEAR_CONTACTS } from "../types";
import PropTypes from "prop-types";

const ContactState = props => {
	const initialState = {
		contacts: []
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	const getContacts = () => {
		axios
			.get("/api/contacts/")
			.then(res => {
				const sort = res.data.sort((a, b) => {
					return new Date(b.create_time) - new Date(a.create_time);
				});
				dispatch({
					type: GET_CONTACTS,
					payload: sort
				});
			})
			.catch(err => console.log(err));
	};

	const clearContacts = () => {
		dispatch({
			type: CLEAR_CONTACTS
		});
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				getContacts,
				clearContacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

ContactState.propTypes = {
	children: PropTypes.any
};

export default ContactState;
