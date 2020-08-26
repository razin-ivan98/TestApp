import { SHOW_GALARY_LOADER , HIDE_GALARY_LOADER } from "../types";

const galaryLoader = (state = false, action) => {
	switch (action.type) {
		case SHOW_GALARY_LOADER:
			return true;
		case HIDE_GALARY_LOADER:
			return false;
		default:
			return state;
	}
};

export default galaryLoader;
