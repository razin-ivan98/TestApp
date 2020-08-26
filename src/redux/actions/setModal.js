import { SET_MODAL } from "../types";

const setModal = payload => ({
	type: SET_MODAL,
	payload,
});

export default setModal;
