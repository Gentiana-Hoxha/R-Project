import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Winners from './Winners';
import Stats from './Stats';
import SessionPlayers from './Session-Players';
import Navigation from './Navigation';
import Homepage from './Homepage';

function App() {
  return (
    <Router className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/winners' element={<Winners/>}/>
        <Route path='/stats' element={<Stats/>}/>
        <Route path='/session-players' element={<SessionPlayers />}/>
      </Routes>
    </Router>
  );
}

export default App;
