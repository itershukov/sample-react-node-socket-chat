/**
 * Created by itersh on 20.02.2018.
 */
import { browserHistory } from 'react-router';
export const checkAuth = store => next => action => {
  if (
    action.payload.error &&
    action.payload.error.stack &&
    action.payload.error.stack.error &&
    action.payload.error.stack.error.statusCode === 401
  ) {
    browserHistory.push('/login');
  }
  return next(action);
};
