import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-mdl';
import './App.css';

class About extends Component {
  render() {
    return (
      <div id="about-container" style={{height: '100%', position: 'relative'}}>
        <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
          <CardTitle style={{color: '#424242', height: '470px', background: 'url(http://localhost:3000/images/about.jpg) center / cover'}}>About</CardTitle>
          <CardText>
            Based in Ann Arbor, MI, Tyler Baker is an artist whose work conveys the cycles of life and death in their many forms using minimal compositions of industry, light and decay.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default About;
