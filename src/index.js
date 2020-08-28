import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import App from "./components/common/App";

import screenResize from "./redux/actions/screenResize";

import { store, persistor } from "./redux";

window.addEventListener("resize", () => {
	store.dispatch(screenResize({
		width: window.innerWidth,
		height: window.innerHeight
	}));
})

const rendered = (
	<Provider store={store}>
		<PersistGate loading="lol" persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);

ReactDOM.render(rendered, document.getElementById("root"));
