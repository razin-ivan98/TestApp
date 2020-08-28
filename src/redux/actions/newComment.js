import { NEW_COMMENT } from "../types";

const newComment = (payload) => ({
	type: NEW_COMMENT,
	payload,
});

export default newComment;
