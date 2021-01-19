import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let counter = 0;
function show() {
    counter++;
    const el = <p>{counter}</p>
    ReactDOM.render(el, document.getElementById('app'));
}

setInterval(show, 1000);
