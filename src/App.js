import './App.css';
import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const history = createBrowserHistory();

// Define component.
const Home = () => {
  // console.log('Rendering Home');
  return <h1>Home</h1>;
}

const About = () => {
  // console.log('Rendering About');
  return <h1>About</h1>;
}

const Contact = () => {
  // console.log('Rendering Contact');
  return <h1>Contact</h1>;
}

function App() {
  // console.log('Current pathname:', history.location.pathname);

  /*------- React router. ---------*/
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Define navigation links. */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );

  /*------- History library. ---------*/
  // return (
  //   <Router>
  //     <div>
  //       <nav>
  //         <ul>
  //           {/* Define navigation links. */}
  //           <li><Link to="/">Home</Link></li>
  //           <li><Link to="/about">About</Link></li>
  //         </ul>
  //       </nav>

  //       {/* Render components based on the current pathname */}
  //       <Routes />
  //     </div>
  //   </Router>
  // ); 
}

// function Routes() {
//   const location = useLocation();

//   return(
//     <>
//       {history.location.pathname === '/' && <Home />}
//       {history.location.pathname === '/about' && <About />}
//     </>
//   );
// }

export default App;
