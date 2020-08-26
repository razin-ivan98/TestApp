import { call, put, takeEvery } from "redux-saga/effects";

import apiFetchImages from "../../api/apiFetchImages";

import { REQUEST_IMAGES } from "../types";
import setImages from "../actions/setImages";
import showGalaryLoader from "../actions/showGalaryLoader";
import hideGalaryLoader from "../actions/hideGalaryLoader";



function* fetchImages() {
	yield put(showGalaryLoader());
	try {
		const images = yield call(apiFetchImages);
		yield put(setImages(images));
		yield put(hideGalaryLoader());
	} catch (e) {
		console.log(e);
		yield put(hideGalaryLoader());
	}
}

export default function* sagaWatcher() {
	yield takeEvery(REQUEST_IMAGES, fetchImages);
};
