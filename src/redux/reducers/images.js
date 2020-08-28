import { SET_IMAGES } from "../types";

const images = (state = [], action) => {
	switch (action.type) {
		case SET_IMAGES:
			return action.payload;
		default:
			return state;
	}
};

export default images;
