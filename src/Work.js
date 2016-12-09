import React, { Component } from 'react';
import { Button, Card, CardTitle, CardActions, Grid, Cell } from 'react-mdl';
import { Link } from 'react-router'
import './App.css';

class Work extends Component {
  render() {
    return (
      <div id="work-container" style={{height: '100%', position: 'relative'}}>
        <Grid className="demo-grid">
            <Cell col={4} tablet={4} phone={12}>
              <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
                <CardTitle style={{color: '#424242', height: '176px', background: 'url(/images/become1.jpg) center / cover'}}>Become</CardTitle>
                <CardActions border>
                    <Link to="/become"><Button>View</Button></Link>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4} tablet={4} phone={12}>
              <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
                <CardTitle style={{color: '#424242', height: '176px', background: 'url(/images/decay1.jpg) center / cover'}}>Decay</CardTitle>
                <CardActions border>
                  <Link to="/decay"><Button>View</Button></Link>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4} tablet={4} phone={12}>
              <Card shadow={0} style={{width: '340px', margin: 'auto'}}>
                <CardTitle style={{color: '#424242', height: '176px'}}>Rebirth</CardTitle>
                <CardActions border>
                  <Button>Coming soon...</Button>
                </CardActions>
              </Card>
            </Cell>
        </Grid>
      </div>
    );
  }
}

export default Work;
