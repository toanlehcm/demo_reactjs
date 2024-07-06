import styles from "./Display.css";

export default function Display(params) {
  /*------- Romulus test ---*/
  function fc(n, x, arr) {
    let arrResult = [];

    for (let i = 2; i <= n; i++) {
      for (let j = 0; j < n; j++) {
        var tempArr = arr.slice(j, j + i);
        var tempResult = tempArr.reduce((a, b) => a + b);
        console.log(tempArr, tempResult);

        if (tempResult > x) {
          arrResult = tempArr;
          break;
        }
      }

      if (arrResult.length > 0) {
        break;
      }
    }

    console.log("result:", new Set(arrResult).size);
  }

  // fc(5, 50, [1, 10, 3, 40, 18]); // 2
  fc(6, 51, [1, 4, 45, 6, 0, 19]); // 3

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
