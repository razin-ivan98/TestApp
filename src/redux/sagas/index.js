import { all } from "redux-saga/effects";

import getImagesSaga from "./getImages";
import getImageWithCommentsSaga from "./getImageWithComments";

export default function* rootSaga() {
	yield all([
		getImageWithCommentsSaga(),
		getImagesSaga(),
	])
};
