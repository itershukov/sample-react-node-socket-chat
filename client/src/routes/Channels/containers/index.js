/**
 * Created by itersh on 14.03.2018.
 */
import { connect } from 'react-redux';
import View from '../components';
import { getChannels, createChannel } from '../../../actions/channel';
import Reducer from '../reducers';
import { withReducer } from 'react-redux-dynamic-reducer/lib/index';

const mapDispatchToProps = {
  getChannels,
  createChannel
};

function _getChannels(state) {
  return state.channels
    ? Object.values(state.channels).map(ch => ({
        id: ch.id,
        name: ch.id,
        participantsCount: ch.users ? ch.users.length : 0
      }))
    : [];
}

const mapStateToProps = state => {
  return {
    channels: _getChannels(state)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withReducer(Reducer, 'channels', { namespaceActions: false })(View)
);
