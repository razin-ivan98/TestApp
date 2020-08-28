import { call, put, takeEvery } from "redux-saga/effects";

import apiSubmitComment from "../../api/apiSubmitComment";

import { SUBMIT_COMMENT } from "../types";

import { showAlert, newComment } from "../actions";

function* submitComment(action) {
	yield put(newComment(action.payload));
	try {
		yield call(apiSubmitComment, action.payload);
	} catch (e) {
		yield put(showAlert({type: "danger", text: "Submit Error: " + e}));
	}
}

export default function* sagaWatcher() {
	yield takeEvery(SUBMIT_COMMENT, submitComment);
};
