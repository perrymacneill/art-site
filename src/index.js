import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import Sidebar from './Sidebar';
import Gallery from './Gallery';
import Contact from './Contact';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Sidebar}>
      <Route path="/" component={Gallery}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('root'))
