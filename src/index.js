import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Sidebar from './Sidebar';
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Sidebar}>
      <Route path="/" component={Work}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="gallery1" component={Gallery1}/>
      <Route path="gallery2" component={Gallery2}/>
    </Route>
  </Router>
), document.getElementById('root'))
