import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function Converter() {
    const [km, setkm] = useState(0);

    useEffect(() => {
        alert("Test useEffect: " + km);
    });

    function handleChange(e) {
        setkm(e.target.value);
    }

    function convert(km) {
        return (km/1.609).toFixed(1);
    }

    return <div><input type="number" value={km} onChange={handleChange} />
        <p>{km} km is {convert(km)} miles</p>
    </div>;
}

ReactDOM.render(<Converter />, document.getElementById('app'));
