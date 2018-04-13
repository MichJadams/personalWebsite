 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import '../style/Navbar.css';
 
 export default class Navbar extends Component {
     render() {
         return (
             
   
              <div className="NameContainer">
              <Link className="Name" to={'/'}>Michaela Adams</Link>
              </div>
             
      
    );
  }
}




