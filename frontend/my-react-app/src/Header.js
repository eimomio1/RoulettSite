import React from 'react';
import PictureBox from './PictureBox';  
import Navbar from './Navbar';


function Header() {
  return (
    <header className="App-header">
                <Navbar />

      <h1>Welcome to My Simple Website</h1>
      <PictureBox />  {}

    </header>
  );
}

export default Header;
