import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

// import logo from 'logo.svg';

import CoreLayout from 'layouts/CoreLayout';
import ContentLayout from 'layouts/ContentLayout/index';
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

  componentDidMount() {
    //TODO init socket
    return false;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App" style={{ height: '100%' }}>
          <ConnectedRouter history={this.props.history}>
            <CoreLayout>
              <ContentLayout>
                <AppRouter store={this.props.store} />
              </ContentLayout>
            </CoreLayout>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}
