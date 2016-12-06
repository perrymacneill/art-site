import React, { Component } from 'react';
import { Layout, Drawer, Navigation, Content } from 'react-mdl';
import './App.css';
import { Link } from 'react-router'

class Sidebar extends Component {
  render() {
    return (
      <div style={{height: '100%', position: 'relative'}}>
          <Layout fixedDrawer>
              <Drawer id="sidebar" title="Tyler Baker">
                  <Navigation id="navigation">
                      <Link to="">Work</Link>
                      <Link to="/about">About</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                {this.props.children}
              </Content>
          </Layout>
      </div>
    );
  }
}

export default Sidebar;
