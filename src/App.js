// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/index';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
