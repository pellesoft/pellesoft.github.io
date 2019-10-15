import React from 'react';
import logo from "./logo.png";
import Navbar from "./components/navbar.component";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="container">
      <header className="site-header">
        <img src={logo} className="site-logo" alt="logo" />
        <div className="header-title">
          <h1 className="header-text">Joseph Pellegrino</h1>
          <span className="subheader-text">Programmer. Writer. Problem solver</span>
        </div>
        <Navbar />
      </header>
      
    </div>
  );
}

export default App;
