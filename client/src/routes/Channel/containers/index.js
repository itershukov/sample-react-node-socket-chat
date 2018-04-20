/**
 * Created by itersh on 14.03.2018.
 */
import { connect } from 'react-redux';
import View from '../components';
import {
  getChannels,
  createChannel,
  createMessage,
  leaveChannel,
  joinChannel
} from '../../../actions/channel';
import Reducer from '../reducers';
import { withReducer } from 'react-redux-dynamic-reducer/lib/index';

const mapDispatchToProps = {
  getChannels,
  joinChannel,
  leaveChannel,
  createMessage,
  createChannel
};

function filterMessages(state) {
  const channel = state.messages ? state.messages.channel : {};
  return Object.values(
    (state.messages && state.messages.messages) || {}
  ).filter(el => el.channel === channel.id);
}

const mapStateToProps = state => {
  return {
    channel: state.messages ? state.messages.channel : {},
    messages: filterMessages(state),
    user: state.user || {}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withReducer(Reducer, 'messages', { namespaceActions: false })(View)
);
