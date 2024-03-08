import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useSearchParams } from 'react-router-dom';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavigate = () => {
    // Set query parameter 'page' to 'about' before navigating
    setSearchParams({ page: 'about' });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleNavigate}>Go to About</button>
    </div>
  );
}

function About() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  return (
    <div>
      <h1>About</h1>
      <p>Page: {page}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
