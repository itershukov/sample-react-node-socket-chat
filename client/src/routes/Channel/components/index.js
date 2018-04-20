/**
 * Created by itersh on 12.03.2018.
 */
import './styles/messages.css';
import './styles/message-bar.css';
import './styles/channel.css';
import { withRouter } from 'react-router';
import React from 'react';
import { Layout, Row, Col, Form, Button, Input } from 'antd';
const { TextArea } = Input;

const FormItem = Form.Item;

class ChannelView extends React.Component {
  static propTypes = {
    // test: PropTypes.string
  };

  componentDidMount() {
    // To disabled submit button at the beginning.
    //
    this.props.joinChannel(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.leaveChannel(this.props.match.params.id);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.createMessage(values);
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { messages, user } = this.props;

    let myUserId = user.id;

    const { getFieldDecorator } = this.props.form;

    return (
      <Layout className="channel">
        <Row>
          <Col span={12} offset={6}>
            <div className="messages">
              {messages.map((item, i) => {
                return (
                  <div
                    className={`messages__item ${
                      myUserId === item.author ? 'messages__item_my' : ''
                    }`}
                    key={i}
                  >
                    <div className="messages__item__header">
                      <div className="messages__item__header__author">
                        {`${item.nickname}:`}
                      </div>
                      <div className="messages__item__header__date">
                        {new Intl.DateTimeFormat('en-GB', {
                          hour: 'numeric',
                          minute: 'numeric',
                          second: 'numeric'
                        }).format(item.ts)}
                      </div>
                    </div>
                    <div className="messages__item__message">{item.text}</div>
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
                  <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem>
                      {getFieldDecorator('text', {
                        rules: [{ required: true, message: 'Please text' }]
                      })(<TextArea placeholder="Message" />)}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit">
                        Send
                      </Button>
                    </FormItem>
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

export default Form.create()(withRouter(ChannelView));
