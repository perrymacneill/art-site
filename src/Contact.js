import React, { Component } from 'react';
import { Textfield, Button, Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Snackbar } from 'react-mdl';
import './App.css';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }

  handleShowSnackbar() {
    this.setState({ isSnackbarActive: true });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }

  render() {
    const { isSnackbarActive } = this.state;
    return (
      <div id="contact-container" style={{height: '100%', position: 'relative'}}>
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: '#424242'}}>Contact</CardTitle>
          <CardText>
            Please fill out the contact form below.
          </CardText>
          <CardActions>
            <Textfield
              onChange={() => {}}
              label="Name..."
              floatingLabel
              style={{width: '200px'}}
            /><br/>
            <Textfield
              onChange={() => {}}
              label="Email..."
              floatingLabel
              style={{width: '200px'}}
            /><br/>
            <Textfield
              onChange={() => {}}
              label="Enter note"
              rows={5}
              floatingLabel
              style={{width: '200px'}}
            /><br/>
            <Button raised ripple colored id="submit-button" onClick={this.handleShowSnackbar}>Submit</Button>
          </CardActions>
        </Card>
        <Snackbar
          active={isSnackbarActive}
          onTimeout={this.handleTimeoutSnackbar}>Contact form submitted.
        </Snackbar>
      </div>
    );
  }
}

export default Contact;
