import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Menu">
        <div className ="Menu-item"><Link to={'/Projects'}>Projects</Link></div>
        <div className ="Menu-item">Statistics</div>
        <div className="Menu-item">Resume</div>
        <div className="Menu-item">Contact</div>
      
      </div>
    );
  }
}




