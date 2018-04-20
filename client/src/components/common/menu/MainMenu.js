/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withReducer } from 'react-redux-dynamic-reducer/lib/index';
import Reducer from '../../../routes/Channels/reducers';
import { connect } from 'react-redux';
import { logout } from 'actions/users';
import { withRouter } from 'react-router';

class MainMenu extends Component {
  handleClick(event) {
    if (event.key === 'logout') {
      this.props.logout();
      return;
    }

    this.props.history.push(event.key);
  }

  render() {
    return (
      <div>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['home']}
          mode="horizontal"
          onClick={this.handleClick.bind(this)}
        >
          <Menu.Item key="/channels">
            <Icon type="home" />
            <span>Home</span>
          </Menu.Item>

          <Menu.Item className="pull-right" key="logout">
            <Icon type="logout" />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(
  withReducer(Reducer, 'channels', { namespaceActions: false })(
    withRouter(MainMenu)
  )
);
