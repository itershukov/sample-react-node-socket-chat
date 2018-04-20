/**
 * Created by itersh on 12.03.2018.
 */
import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../components/common/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./containers/index'),
  loading: Loading
});

export default props => <LoadableComponent />;
