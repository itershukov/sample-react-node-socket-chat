import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/common/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./containers'),
  loading: Loading
});

export default props => <LoadableComponent {...props} />;
