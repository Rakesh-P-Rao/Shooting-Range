import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter  } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
