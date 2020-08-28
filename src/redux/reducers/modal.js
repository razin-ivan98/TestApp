import { SET_MODAL , CLOSE_MODAL, NEW_COMMENT } from "../types";

const modal = (state = null, action) => {
	switch (action.type) {
		case SET_MODAL:
			return action.payload;
		case CLOSE_MODAL:
			return null;
		case NEW_COMMENT:
			return {
				...state,
				comments: [
					...state.comments,
					{
						text: action.payload.text,
						date: Date(),
						id: state.comments.length,
					},
				],
			}
		default:
			return state;
	}
};

export default modal;
