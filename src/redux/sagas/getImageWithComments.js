import { call, put, takeEvery } from "redux-saga/effects";

import apiFetchImageWithComments from "../../api/apiFetchImageWithComments";

import { OPEN_MODAL } from "../types";
import setModal from "../actions/setModal";
import showModalLoader from "../actions/showModalLoader";
import hideModalLoader from "../actions/hideModalLoader";

function* fetchImageWithComments(action) {
	yield put(setModal({}));
	yield put(showModalLoader());
	try {
		const image = yield call(apiFetchImageWithComments, action.payload);
		yield put(setModal(image));
		yield put(hideModalLoader());
	} catch (e) {
		console.log(e);
		yield put(hideModalLoader());
	}
}

export default function* sagaWatcher() {
	yield takeEvery(OPEN_MODAL, fetchImageWithComments);
};
