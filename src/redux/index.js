import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";

import sagaWatcher from "./sagas";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(saga)));

const persistor = persistStore(store);

saga.run(sagaWatcher);

export { store, persistor };
