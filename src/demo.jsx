// JSX code example
import ReactDOM from "react-dom";

export default function Greeting(props) {
  console.log("props", props);
  console.log("props.name", props.name);

  return <div>Hello, {props.name}!</div>;
}

ReactDOM.render(<Greeting name="World" />, document.getElementById("root"));
