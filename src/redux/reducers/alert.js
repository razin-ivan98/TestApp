import { SHOW_ALERT , HIDE_ALERT } from "../types";

const alert = (state = null, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return action.payload;
		case HIDE_ALERT:
			return null;
		default:
			return state;
	}
};

export default alert;
