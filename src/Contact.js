import React, { Component } from 'react';
import { Textfield, Button, Card, CardTitle, CardText, CardActions, Snackbar } from 'react-mdl';
import './App.css';
import $ from 'jquery';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = { isSnackbarActive: false, buttonClicked: false };
  }

  handleShowSnackbar() {
    const URL = 'https://8dcw2tnu60.execute-api.us-west-2.amazonaws.com/prod/contact';

    let data = {
      name: document.getElementById('name-input').value,
      email: document.getElementById('email-input').value,
      description: document.getElementById('note-input').value
    };

    $.ajax({
      type: 'POST',
      url: URL,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function () {
        // clear form and show a success message
      },
      error: function () {
        // show an error message
      }
    })
    this.setState({ isSnackbarActive: true });
    this.setState({ buttonClicked: true });
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
              id="name-input"
              onChange={() => {}}
              label="Name..."
              floatingLabel
            /><br/>
            <Textfield
              id="email-input"
              onChange={() => {}}
              label="Email..."
              floatingLabel
            /><br/>
            <Textfield
              id="note-input"
              onChange={() => {}}
              label="Enter note"
              rows={5}
              floatingLabel
            /><br/>
            {(this.state.buttonClicked && <Button raised disabled colored id="submit-button">Submit</Button>) ||
            <Button raised ripple colored id="submit-button" onClick={this.handleShowSnackbar}>Submit</Button>}
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
