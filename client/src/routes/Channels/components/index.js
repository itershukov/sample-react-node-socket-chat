/**
 * Created by itersh on 12.03.2018.
 */
import React from 'react';
import { Row, Col, List, Form, Button } from 'antd';
import { withRouter } from 'react-router';
import Link from 'react-router-dom/Link';
const FormItem = Form.Item;

class ChannelsView extends React.Component {
  static propTypes = {
    // test: PropTypes.string
  };

  componentDidMount() {
    this.props.getChannels();
  }

  createChannel() {
    this.props.createChannel({});
  }

  render() {
    const ds = this.props.channels;

    return (
      <Row>
        <Col span={12} offset={6} style={{ paddingTop: 20 }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              <Button
                type="primary"
                type="submit"
                onClick={this.createChannel.bind(this)}
              >
                Start new channel
              </Button>
            </FormItem>
          </Form>
          <h2>Available channels:</h2>
          <List
            itemLayout="horizontal"
            dataSource={ds}
            renderItem={item => (
              <List.Item
                actions={[<Link to={`channels/${item.id}`}>join</Link>]}
              >
                <List.Item.Meta
                  title={
                    <Link to={`channels/${item.id}`}>{`Channel #${
                      item.name
                    }`}</Link>
                  }
                />
                <div>{`${item.participantsCount || 0} participants`}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}

export default withRouter(ChannelsView);
