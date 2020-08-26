import { OPEN_MODAL } from "../types";

const openModal = (id) => ({
	type: OPEN_MODAL,
	payload: id,
});

export default openModal;
