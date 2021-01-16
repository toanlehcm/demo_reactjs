import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App headerProp = "Header ffom props.." contentProp = "Content from props..."/>, document.getElementById('app'));

// export default App; // export do not working so using document.getEmplementById('app')