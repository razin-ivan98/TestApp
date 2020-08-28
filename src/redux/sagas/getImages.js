import { call, put, takeEvery } from "redux-saga/effects";

import apiFetchImages from "../../api/apiFetchImages";

import { REQUEST_IMAGES } from "../types";
import { setImages, showGalaryLoader, hideGalaryLoader, showAlert } from "../actions";

function* fetchImages() {
	yield put(showGalaryLoader());
	try {
		const images = yield call(apiFetchImages);
		yield put(setImages(images));
		yield put(hideGalaryLoader());
	} catch (e) {
		yield put(showAlert({type: "danger", text: "Request Error"}));
		yield put(hideGalaryLoader());
	}
}

export default function* sagaWatcher() {
	yield takeEvery(REQUEST_IMAGES, fetchImages);
};
