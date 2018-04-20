/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider } = Layout;

class CoreLayout extends Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>{this.props.children}</Layout>
    );
  }
}

export default CoreLayout;
