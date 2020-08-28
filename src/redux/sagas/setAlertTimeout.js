import { put, takeEvery, delay } from "redux-saga/effects";

import { SHOW_ALERT } from "../types";
import { hideAlert } from "../actions";

function* setAlertTimeout() {
	yield delay(2000);
	yield put(hideAlert());
}

export default function* sagaWatcher() {
	yield takeEvery(SHOW_ALERT, setAlertTimeout);
};
