import { SHOW_ALERT } from "../types";

const showAlert = (payload) => ({
	type: SHOW_ALERT,
	payload
});

export default showAlert;
