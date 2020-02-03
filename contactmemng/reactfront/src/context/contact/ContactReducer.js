import { GET_CONTACTS } from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload
			};
		default:
			return state;
	}
};
