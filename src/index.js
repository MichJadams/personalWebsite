import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import {render} from 'react-dom'

import './style/index.css';

import Navbar from './components/Navbar.js';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import registerServiceWorker from './registerServiceWorker';



render(
    <div>
        <Router>
        <div>
        <Navbar />
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Projects" component={Projects} />
                </Switch>
                </div>
            </Router>
    </div>,
    document.getElementById('root'))
    registerServiceWorker();