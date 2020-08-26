import { SHOW_MODAL_LOADER , HIDE_MODAL_LOADER } from "../types";

const modalLoader = (state = false, action) => {
	switch (action.type) {
		case SHOW_MODAL_LOADER:
			return true;
		case HIDE_MODAL_LOADER:
			return false;
		default:
			return state;
	}
};

export default modalLoader;