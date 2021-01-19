import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Hello (props) {
    return <h1>Hello {props.name}</h1>;
}

function NameList() {
    return <div>
        <Hello name="David" />
        <Hello name="James" />
        <Hello name="Amy" />
    </div>;
}

ReactDOM.render(NameList(), document.getElementById('app'));
