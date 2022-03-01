import './App.css';
import React from 'react';
import { Link} from 'react-router-dom'


function Navigation() {
  return (
    <nav className="App">
      <ul>
        <Link to="/" exact ><li>Homepage</li></Link>
        <Link to="/winners"><li>Winners</li></Link>
        <Link to="/stats"><li>Stats</li></Link>
        <Link to="/session-players"><li>SessionPlayers</li></Link>
      </ul>
    </nav>
  );
}

export default Navigation;
