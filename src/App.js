import './App.css';
import React from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Define component.
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Define navigation links. */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
