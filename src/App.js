const React = require('react');

function Header() {
  return <h1>Header (Fast Render)</h1>;
}

function Post() {
  // Simulate heavy rendering by large loop
  const content = Array.from({ length: 1000000 }, (_, i) => (
    <p key={i}>Post content line {i}</p>
  ));

  return (
    <div>
      <h2>Post (Slow Render)</h2>
      {content}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Post />
    </div>
  );
}

module.exports = App;
