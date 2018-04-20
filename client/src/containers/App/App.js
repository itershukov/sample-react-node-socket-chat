import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import './App.css';

import AppRouter from 'routes';

export default class App extends Component {
  static propTypes = {
    // store: PropTypes.object.isRequired,
    // routes: PropTypes.object.isRequired,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App" style={{ height: '100%' }}>
          <ConnectedRouter history={this.props.history}>
            <AppRouter store={this.props.store} />
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}
