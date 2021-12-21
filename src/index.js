import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastProvider } from "react-toast-notifications";
import "html5-device-mockups/dist/device-mockups.min.css";
import ReactGA from "react-ga";
import Config from "./App.config"

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);



ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ToastProvider placement="top-left">
				<App />
			</ToastProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
 reportWebVitals();
