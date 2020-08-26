import { combineReducers } from "redux";

import images from "./reducers/images";
import modal from "./reducers/modal";
import galaryLoader from "./reducers/galaryLoader";
import modalLoader from "./reducers/modalLoader";



export default combineReducers({images, modal, galaryLoader, modalLoader});
