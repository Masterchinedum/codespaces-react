import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/body';
import './App.css';

const App = () => {
      // Import Karla font from Google Fonts
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Karla&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
  return (
    <div className='App'>
      <Navbar />
      <Body />
    </div>
  )
}

export default App
