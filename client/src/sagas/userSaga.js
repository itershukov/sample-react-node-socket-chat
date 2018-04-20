/**
 * Created by itersh on 08.04.2018.
 */
import { put, takeEvery, call } from 'redux-saga/effects';
import * as apiUser from 'api/user';
import { push } from 'react-router-redux';

function* createUser(action) {
  try {
    console.log('userCreateSaga');
    const user = yield call(apiUser.createUser, action.payload);

    yield put({ type: 'USER_POST_SUCCESS', payload: user });
    yield put(push('/channels'));
  } catch (e) {
    yield put({ type: 'USER_POST_ERROR', payload: e.message });
  }
}

//
// /*
//   Starts fetchUser on each dispatched `USER_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
function* userCreateSaga() {
  yield takeEvery('USER_POST_START', createUser);
}

function* logout(action) {
  try {
    // const user = yield call(apiUser.createUser, action.payload);
    console.log('logout');

    yield put({ type: 'LOGOUT_POST_SUCCESS', payload: null });
    yield put({ type: 'APP_DATA_CLEAR', payload: {} });
  } catch (e) {
    yield put({ type: 'LOGOUT_POST_ERROR', payload: e.message });
  }
}

function* userLogoutSaga() {
  yield takeEvery('LOGOUT_POST_START', logout);
}

export default [userCreateSaga(), userLogoutSaga()];
