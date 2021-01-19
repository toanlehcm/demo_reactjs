import React, {useState} from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function Hello() {
    const [name, setName] = useState("SS");
    return <h1>{name}</h1>;
}
ReactDOM.render(<Hello />, document.getElementById('app'));
