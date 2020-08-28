import { combineReducers } from "redux";

import images from "./images";
import modal from "./modal";
import galaryLoader from "./galaryLoader";
import modalLoader from "./modalLoader";
import alert from "./alert";
import screen from "./screen";

export default combineReducers({
	images, modal, galaryLoader, modalLoader, alert, screen
});
