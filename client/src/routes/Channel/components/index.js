/**
 * Created by itersh on 12.03.2018.
 */
import './messages.css';
import './message-bar.css';
import './channel.css';

import React from 'react';
import { Layout, Row, Col, List, Form, Button } from 'antd';

const FormItem = Form.Item;
const { Header } = Layout;

export default class ChannelView extends React.Component {
  static propTypes = {
    // test: PropTypes.string
  };

  render() {
    const ds = [
      {
        userId: '1',
        nickname: 'John',
        message: '1',
        date: new Date()
      },
      {
        userId: '2',
        nickname: 'Bill',
        message: '2',
        date: new Date()
      },
      {
        userId: '2',
        nickname: 'Bill',
        message: '2',
        date: new Date()
      },
      {
        userId: '2',
        nickname: 'Bill',
        message: '2',
        date: new Date()
      } /*,
      {
        userId: '2',
        nickname: 'Bill',
        message: '2',
        date: new Date()
      },
      {
        userId: '1',
        nickname: 'John',
        message: '1',
        date: new Date()
      },
      {
        userId: '2',
        nickname: 'Bill',
        message: '2',
        date: new Date()
      },
      {
        userId: '2',
        nickname: 'Bill',
        message: '2',
        date: new Date()
      }*/
    ];

    let myUserId = '1';

    return (
      <Layout className="channel">
        <Header className="header">
          <Button href="/channels">Back to channels list</Button>
        </Header>
        <Row>
          <Col span={12} offset={6}>
            <div className="messages">
              {ds.map((item, i) => {
                return (
                  <div
                    className={`messages--item ${
                      myUserId === item.userId ? 'messages--item__my' : ''
                    }`}
                    key={i}
                  >
                    <div className="messages--item--header">
                      <div className="messages--item--header--author">
                        {`${item.nickname}:`}
                      </div>
                      <div className="messages--item--header--date">
                        {new Intl.DateTimeFormat('en-GB', {
                          hour: 'numeric',
                          minute: 'numeric',
                          second: 'numeric'
                        }).format(item.date)}
                      </div>
                    </div>
                    <div className="messages--item--message">
                      {item.message}
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>

        <Row className="message-bar">
          <Col>
            <Row>
              <Col span={12} offset={6}>
                <Row className="message-bar__form" gutter={15}>
                  <Form onSubmit={this.handleSubmit}>
                    <Col span={18}>
                      <textarea className="message-bar__form__textarea" />
                    </Col>
                    <Col span={6}>
                      <Button type="primary" type="submit">
                        Send
                      </Button>
                    </Col>
                  </Form>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    );
  }
}
