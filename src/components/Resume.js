import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Resume.css';

export default class Resume extends Component {
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




