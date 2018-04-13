import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import {render} from 'react-dom'

import './style/index.css';

import Navbar from './components/Navbar.js';
import Name from './components/Name.js'
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import Statistics from './components/Statistics.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js'





render(
    <div>
        <Router>
        <div>
        <Name />
        <Navbar />
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Statistics" component={Statistics} />
                    <Route path="/Resume" component={Resume} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
                </div>
            </Router>
    </div>,
    document.getElementById('root'))
