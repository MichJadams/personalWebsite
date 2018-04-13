import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
     
      <div className="Menu">
        <Link className ="Menu-item" to={'/Projects'}>Projects</Link>
        <Link className ="Menu-item" to={'/Resume'}>Resume</Link>
        <Link className ="Menu-item" to={'/Contact'}>Contact</Link>
        <Link className ="Menu-item" to={'/Statistics'}>Statistics</Link>
      </div>

    );
  }
}




