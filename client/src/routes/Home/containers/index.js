/**
 * Created by itersh on 14.03.2018.
 */
import { connect } from 'react-redux';
import View from '../components';
import { withReducer } from 'react-redux-dynamic-reducer/lib/index';

import { createUser } from '../../../actions/users';
import Reducer from '../reducers';

const mapDispatchToProps = {
  createUser
};

const mapStateToProps = state => {
  return {
    user: state.user || {}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withReducer(Reducer, 'user', { namespaceActions: false })(View)
);
