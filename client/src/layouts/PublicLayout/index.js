/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from 'routes/Home/index';

const { Content } = Layout;

export default class PublicLayout extends Component {
  render() {
    return (
      <div className="public-layout">
        <Content style={{ minHeight: '80vh' }}>
          <Route exact path="/login" component={Home} />
        </Content>
      </div>
    );
  }
}
