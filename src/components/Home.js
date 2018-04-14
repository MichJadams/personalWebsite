import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import me from '../style/assets/Me.jpg'
export default class Home extends Component {
  render() {
    return (
      

      
       <div className="imageContainer">
       <img src={me} className="backgroundImage"/>
       <div className="aboutMeContainer">
          <div className="aboutMeContent">About me: some stuff about me. some stuff about me. some stuff about me. some stuff about me. some stuff about me.some stuff about me. some stuff about me. </div>
       </div>
       </div>
    );
  }
}

