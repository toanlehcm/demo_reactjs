import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function NewPage() {
  return <h1>New Page</h1>;
}

function AnotherPage() {
  return <h1>Another Page</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/another-page" element={<AnotherPage />} />
        </Routes>
        <NavigationButtons />
      </div>
    </Router>
  );
}

function NavigationButtons() {
  const navigate = useNavigate();

  const handlePush = () => {
    navigate('/new-page');
  }

  const handleReplace = () => {
    navigate('/another-page', { replace: true })
  }

  return (
    <div>
      <button onClick={handlePush}>Go to New Page (push)</button>
      <button onClick={handleReplace}>Go to Another Page (replace)</button>
    </div>
  );
}

export default App;
