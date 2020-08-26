import { SET_MODAL , CLOSE_MODAL } from "../types";

const modal = (state = null, action) => {
	switch (action.type) {
		case SET_MODAL:
			return action.payload;
		case CLOSE_MODAL:
			return null;
		default:
			return state;
	}
};

export default modal;
