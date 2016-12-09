import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection } from 'react-mdl';
import './App.css';

class Gallery extends Component {
  render() {
    return (
      <div>
        <div style={{width: '80%', margin: 'auto'}}>
          <Grid className="demo-grid">
            {this.props.route.photos.map(function(name, index){
              return <Cell key={index} col={4} tablet={4} phone={12}><img src={name} alt="" /></Cell>
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Gallery;
