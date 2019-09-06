import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './components/PlayerList.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     <PlayerList />
    </div>
  );
}

export default App;
