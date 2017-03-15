import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Sidebar from './Sidebar';
import Gallery from './Gallery';
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
      <Route path="become" component={Gallery} photos={[...Array(4)].map((x, i) => `/images/become${i+1}.jpg`)}/>
      <Route path="decay" component={Gallery} photos={[...Array(3)].map((x, i) => `/images/decay${i+1}.jpg`)}/>
      <Route path="rebirth" component={Gallery} photos={[...Array(2)].map((x, i) => `/images/rebirth${i+1}.jpg`)}/>
    </Route>
  </Router>
), document.getElementById('root'))
