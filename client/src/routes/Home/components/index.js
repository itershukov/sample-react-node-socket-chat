/**
 * Created by itersh on 12.03.2018.
 */
import React from 'react';
import { Button, Input, Card, Row, Col, Form } from 'antd';

const FormItem = Form.Item;

class HomeView extends React.Component {
  static propTypes = {
    // test: PropTypes.string
  };

  handleSubmit(e) {
    e.preventDefault();
    const { createUser } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        createUser(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row>
        <Col span={12} offset={6}>
          <Card style={{ marginTop: 20 }}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <p>Please enter your name as you want it to appear in the chat</p>
              <FormItem>
                {getFieldDecorator('nickname', {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                })(<Input placeholder="Nickname" />)}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Start messaging
                </Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}
const WrappedHomeView = Form.create()(HomeView);
export default WrappedHomeView;
