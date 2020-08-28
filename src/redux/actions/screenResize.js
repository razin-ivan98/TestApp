import { SCREEN_RESIZE } from "../types";

const screenResize = (payload) => ({
	type: SCREEN_RESIZE,
	payload,
});

export default screenResize;
