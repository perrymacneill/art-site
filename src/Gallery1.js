import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection } from 'react-mdl';
import './App.css';

class Gallery1 extends Component {
  render() {
    return (
      <div>
        <div style={{width: '80%', margin: 'auto'}}>
          <Grid className="demo-grid">
              <Cell col={4} tablet={4} phone={12}><img src="/images/become2.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="/images/become3.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="/images/become4.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="/images/become5.jpg" alt="" /></Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Gallery1;
