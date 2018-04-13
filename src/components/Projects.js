import React, { Component, Link } from 'react';

import '../style/Projects.css';
import AreYouAliveLogo from '../style/assets/AreYouAliveLogo.svg'
import AreYouThereLogo from '../style/assets/AreYouThereLogo.svg'
import Name from './Name.js'
export default class Projects extends Component {
  render() {
    return (

      <div className="projectsContainer">
      <Name />
        <img src={AreYouAliveLogo} className="projectImage"/>
        <div className="projectDescription">Project: Are you alive description</div>
        <div className="projectDescription">Tools: Are you alive description</div>
        <div className="projectDescription">Link: Are you alive description</div>
        <img src={AreYouThereLogo} className="projectImage"/>
        <div className="projectDescription">Project: Are you alive description</div>
        <div className="projectDescription">Tools: Are you alive description</div>
        <div className="projectDescription">Link: Are you alive description</div>
      </div>

    );
  }
}
