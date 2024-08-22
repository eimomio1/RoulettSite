// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import RandomQuote from './RandomQuote';
import Calculator from './Calculator';
import PictureBox from './PictureBox';  
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';  

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <>
                <RandomQuote />
                <Calculator />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />  {}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
