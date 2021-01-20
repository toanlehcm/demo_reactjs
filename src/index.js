import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("Test useEffect: " + counter);
    });

    function increment() {
        setCounter(counter + 1);
    }

    return <div><h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
    </div>;
}

ReactDOM.render(<Counter />, document.getElementById('app'));
