import { SUBMIT_COMMENT } from "../types";

const submitComment = (payload) => ({
	type: SUBMIT_COMMENT,
	payload,
});

export default submitComment;
