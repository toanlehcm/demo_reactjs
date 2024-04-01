import styles from "./Display.css";

export default function Display(params) {
  return (
    <>
      <div className="container">
        <img src="/logo192.png" alt="Your Image" />
      </div>

      <h1>The display Property</h1>

      <h2>display: inline</h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. <span className="a">Aliquam</span> <span className="a">venenatis</span> gravida nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.{" "}
      </div>

      <h2>display: inline-block</h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. <span className="b">Aliquam</span> <span className="b">venenatis</span> gravida nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.{" "}
      </div>

      <h2>display: block</h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. <span className="c">Aliquam</span> <span className="c">venenatis</span> gravida nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.{" "}
      </div>
    </>
  );
}
