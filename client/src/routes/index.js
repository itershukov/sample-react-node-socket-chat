/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import InternalLayout from 'layouts/InternalLayout';
import PublicLayout from 'layouts/PublicLayout';
import AuthRedirect from 'containers/AuthRedirect';

export default class AppRouter extends Component {
  static propTypes = {
    // store: PropTypes.object.isRequired,
    // routes: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <AuthRedirect />
        <Switch>
          <Route exact path="/login" component={PublicLayout} />
          <Route path="/" component={InternalLayout} />
        </Switch>
      </div>
    );
  }
}
