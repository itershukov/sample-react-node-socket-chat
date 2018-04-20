/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default class CoreLayout extends Component {
  render() {
    return (
      <Content style={{ minHeight: '80vh' }}>{this.props.children}</Content>
    );
  }
}
