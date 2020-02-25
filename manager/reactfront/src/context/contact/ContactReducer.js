import { GET_CONTACTS, CLEAR_CONTACTS } from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload
			};
		case CLEAR_CONTACTS:
			return {
				...state,
				contacts: []
			};
		default:
			return state;
	}
};
