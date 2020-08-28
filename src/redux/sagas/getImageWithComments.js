import { call, put, takeEvery } from "redux-saga/effects";

import apiFetchImageWithComments from "../../api/apiFetchImageWithComments";

import { OPEN_MODAL } from "../types";

import { setModal, showModalLoader,
	hideModalLoader, closeModal, showAlert
} from "../actions";

function* fetchImageWithComments(action) {
	yield put(setModal({}));
	yield put(showModalLoader());
	try {
		const image = yield call(apiFetchImageWithComments, action.payload);
		yield put(setModal(image));
		yield put(hideModalLoader());
	} catch (e) {
		yield put(closeModal());
		yield put(hideModalLoader());
		yield put(showAlert({type: "danger", text:"Request Error"}));
	}
}

export default function* sagaWatcher() {
	yield takeEvery(OPEN_MODAL, fetchImageWithComments);
};
