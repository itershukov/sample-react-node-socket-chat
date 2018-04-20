/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class MailMenu extends Component {
  render() {
    return (
      <div>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline">
          <Menu.Item key="home">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="users">
            <Icon type="pie-chart" />
            <span>
              <Link to="/users">Users</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="posts">
            <Icon type="desktop" />
            <span>
              <Link to="/posts">Posts</Link>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
