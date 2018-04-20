import React, { Component } from 'react';
import { Redirect } from 'react-router';

export class AuthRedirect extends Component {
  render() {
    return this.props.user ? null : <Redirect to="/login" />;
  }
}
