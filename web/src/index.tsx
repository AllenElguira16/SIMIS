import React from "react";
import ReactDOM from "react-dom";
import './Assets/styles.scss';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8000/rest";
// Axios.defaults.withCredentials = true

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
