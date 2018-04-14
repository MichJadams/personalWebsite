import React, { Component, Link } from 'react';

import '../style/Projects.css';
import AreYouAliveLogo from '../style/assets/AreYouAliveLogo.svg'
import AreYouThereLogo from '../style/assets/AreYouThereLogo.svg'
import MystiqueBoutiqueLogo from '../style/assets/MysBouLogo.svg'
import voteBlockLogo from '../style/assets/VoteBlockLogo.svg'
import projectsBackground from '../style/assets/projectBackground.jpg'
import Name from './Name.js'
export default class Projects extends Component {

  

  render() {
    return (

      <div className="projectsContainer">
      <Name />
        <img src={MystiqueBoutiqueLogo} className="projectImage"/>
        <div className="projectDescription">Project: Online retail store featuing fantastic beasts. The prices are dicy and the products questionable, but gosh was it a good exercise in creating a CRUD application.</div>
        <div className="projectDescription">Tools: Passport, google Oauth, Postgress,redux, redux,react-redux, sequelize, axios,socket.io</div>
        <div className="projectDescription">Link: https://github.com/The-Power-Store/Level-Up, mysti-bouti.herokuapp.com</div>
        <img src={AreYouAliveLogo} className="projectImage"/>
        <div className="projectDescription">Project: One player controls a dot which swims amongs other computer controlled dots. The second player must determine which dot is a person before a timer runs out. </div>
        <div className="projectDescription">Tools: phaser.js, babel, bootstrap, socket.io, webpacks, socket.io-cookie-parser</div>
        <div className="projectDescription">Link: ....coming.</div>
        <img src={AreYouThereLogo} className="projectImage"/>
        <div className="projectDescription">Project: Players navigate sets of 3D mazes of tunnels set within a giant cube. The mazes are not connected. Players cannot interact in any way other than to see eachother.</div>
        <div className="projectDescription">Tools: three.js, WebGL, socket.io</div>
        <div className="projectDescription">Link: COMING SOON</div>
        <img src={voteBlockLogo} className="projectImage"/>
        <div className="projectDescription">Project: A small voting application that uses secure contracts to count votes.</div>
        <div className="projectDescription">Tools: ??? TBD</div>
        <div className="projectDescription">Link: I've not started this one, but it's a nice idea</div>
      </div>

    );
  }
}
