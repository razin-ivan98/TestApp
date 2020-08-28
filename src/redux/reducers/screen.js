import { SCREEN_RESIZE } from "../types";

const alert = (state = {width: window.innerWidth, height: window.innerHeight}, action) => {
	switch (action.type) {
		case SCREEN_RESIZE:
			return action.payload;
		default:
			return state;
	}
};

export default alert;
