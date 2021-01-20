import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function AddForm() {
    const [sum, setSum] = useState(0);
    const [num, setNum] = useState(0);

    function handleChange(e) {
        setNum(e.target.value);
    }

    function submit(e) {
        setSum(sum + Number(num));
        e.preventDefault();
    }

    return <form onSubmit={submit}>
        <div>
            <input type="number" value={num} onChange={handleChange} />
            <input type="submit" value="Add" />
            <p>Sum is {sum}</p>
        </div>
    </form>
}

ReactDOM.render(<AddForm />, document.getElementById('app'));
