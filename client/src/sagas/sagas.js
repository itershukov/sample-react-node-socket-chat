/**
 * Created by itersh on 14.03.2018.
 */
import { all } from 'redux-saga/effects';
import usersSaga from './userSaga';
import channelSaga from './channelSaga';
//
// /*
//   Alternatively you may use takeLatest.
//
//   Does not allow concurrent fetches of user. If "USER_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* userSaga() {
//   yield takeLatest("USER_REQUESTED", fetchUser);
// }

export default function* rootSaga() {
  yield all([...usersSaga, ...channelSaga]);
}
