import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";

import sagaWatcher from "./redux/sagas";

import rootReducer from "./redux/rootReducer";

import App from "./components/common/App";

const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

const rendered = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(rendered, document.getElementById("root"));