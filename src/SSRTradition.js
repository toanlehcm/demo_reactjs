// ✅ DEMO 1: React 17-style (Blocking SSR)
require("@babel/register")({
  extensions: [".js", ".jsx"],
});

const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("./App");

// Hàm blocking đồng bộ (ví dụ: sleep 3s)
function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}

const app = express();

app.get("/", (req, res) => {
  // sleep(10000); // Block 3s.
  const html = ReactDOMServer.renderToString(React.createElement(App));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>React 17 SSR</title></head>
      <body>${html}</body>
    </html>
  `);
});

app.listen(3001, () => {
  console.log("React 17 SSR running at http://localhost:3001");
});
