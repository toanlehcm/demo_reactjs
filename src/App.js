import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './containers/Home/HomePage';
import AboutPage from './containers/About/AboutPage';
import ContactPage from './containers/Contact/Contact';

// Define component.
const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>

function App() {
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

        {/* Define routes. Each route component defines a mapping between a path and a component. */}
        <Routes>
          <Route path='/' element={<HomePage><Home /></HomePage>} />
          <Route path='/about' element={<AboutPage><About /></AboutPage>} />
          <Route path='/contact' element={<ContactPage><Contact /></ContactPage>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
