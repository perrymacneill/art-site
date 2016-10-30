import React, { Component } from 'react';
import { Layout, Drawer, Navigation, Content, Grid, Cell, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import './App.css';

class Gallery extends Component {
  render() {
    return (
      <div>
        <div style={{width: '80%', margin: 'auto'}}>
          <Grid className="demo-grid">
              <Cell col={4} tablet={4} phone={12}><img src="http://localhost:3000/images/2.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="http://localhost:3000/images/3.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="http://localhost:3000/images/4.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="http://localhost:3000/images/5.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="http://localhost:3000/images/7.jpg" alt="" /></Cell>
              <Cell col={4} tablet={4} phone={12}><img src="http://localhost:3000/images/8.jpg" alt="" /></Cell>
          </Grid>
        </div>
        <Footer size="mini" id="footer">
          <FooterSection type="left" logo="Copyright © 2016 Tyler Baker">
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default Gallery;
