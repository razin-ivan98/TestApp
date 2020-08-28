import { all } from "redux-saga/effects";

import getImagesSaga from "./getImages";
import getImageWithCommentsSaga from "./getImageWithComments";
import setAlertTimeout from "./setAlertTimeout";
import submitComment from "./submitComment";

export default function* rootSaga() {
	yield all([
		getImageWithCommentsSaga(),
		getImagesSaga(),
		setAlertTimeout(),
		submitComment(),
	])
};
