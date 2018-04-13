import React, { Component, Link } from 'react';

import '../style/Projects.css';
import AreYouAliveLogo from '../style/assets/AreYouAliveLogo.svg'
export default class Projects extends Component {
  render() {
    return (
      <div className="projectsContainer">
        <img src={AreYouAliveLogo} className="projectImage"/>
        <div className="projectDescription"> Are you alive description</div>
      </div>
    );
  }
}
