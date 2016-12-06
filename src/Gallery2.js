import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection } from 'react-mdl';
import './App.css';

class Gallery2 extends Component {
  render() {
    return (
      <div>
        <div style={{width: '80%', margin: 'auto'}}>
          <Grid className="demo-grid">
              <Cell col={4} tablet={4} phone={12}><img src="/images/decay1.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="/images/decay2.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="/images/decay3.jpg" alt="" /></Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Gallery2;
