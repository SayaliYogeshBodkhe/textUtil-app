import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './pages/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    console.log("Alert shown:", message, type);  // DEBUG
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000427ff';
      document.body.style.color = 'white';
      document.title="TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    /*setInterval(() => {
        document.title=' TextUtils is Amazing '
      },1500 );
      setInterval(() => {
        document.title='Instal TextUtils Now '
      },1500 );*/
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#000427ff';
      document.title="TextUtils - light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert}heading="Enter the text to analyze" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
