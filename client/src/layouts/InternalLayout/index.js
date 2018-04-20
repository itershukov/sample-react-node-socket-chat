/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Channels from 'routes/Channels/index';
import Channel from 'routes/Channel/index';
import MainMenu from 'components/common/menu/MainMenu';

const { Content } = Layout;

export default class InternalLayout extends Component {
  render() {
    return (
      <div className="internal-layout">
        <MainMenu />
        <Content style={{ minHeight: '80vh' }}>
          <Route path="/channels/:id" component={Channel} />
          <Route exact path="/channels" component={Channels} />
        </Content>
      </div>
    );
  }
}
