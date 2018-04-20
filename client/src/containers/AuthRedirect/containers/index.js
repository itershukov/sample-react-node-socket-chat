import { withReducer } from 'react-redux-dynamic-reducer/lib/index';
import Reducer from '../reducers';
import { AuthRedirect } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user || null
  };
};

export default connect(mapStateToProps)(
  withReducer(Reducer, 'auth', { namespaceActions: false })(AuthRedirect)
);
