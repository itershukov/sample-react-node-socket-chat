/**
 * Created by itersh on 12.03.2018.
 */
import React from 'react';
import { Row, Col, List, Form, Button } from 'antd';

const FormItem = Form.Item;

export default class ChannelsView extends React.Component {
  static propTypes = {
    // test: PropTypes.string
  };

  render() {
    const ds = [
      {
        id: '1',
        name: '1',
        participantsCount: 1
      },
      {
        id: '1',
        name: '2',
        participantsCount: 1
      },
      {
        id: '1',
        name: '3',
        participantsCount: 1
      },
      {
        id: '1',
        name: '4',
        participantsCount: 1
      }
    ];

    return (
      <Row>
        <Col span={12} offset={6} style={{ paddingTop: 20 }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              <Button type="primary" type="submit">
                Start new channel
              </Button>
            </FormItem>
          </Form>
          <h2>Available channels:</h2>
          <List
            itemLayout="horizontal"
            dataSource={ds}
            renderItem={item => (
              <List.Item actions={[<a href={`channels/${item.id}`}>join</a>]}>
                <List.Item.Meta
                  title={
                    <a href={`channels/${item.id}`}>{`Channel #${
                      item.name
                    }`}</a>
                  }
                />
                <div>{`${item.participantsCount} participants`}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}
