/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/index';
import Users from './Users/index';
import Channels from './Channels/index';
import Channel from './Channel/index';

export default class AppRouter extends Component {
  static propTypes = {
    // store: PropTypes.object.isRequired,
    // routes: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/channels/:id" component={Channel} />
        <Route exact path="/channels" component={Channels} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}
