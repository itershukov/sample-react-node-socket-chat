/**
 * Created by itersh on 08.04.2018.
 */
import {put, takeEvery, call} from "redux-saga/effects";
import {delay} from "redux-saga";
import * as apiUser from 'api/user'
import { push } from 'react-router-redux'

function* createUser(action) {
  try {
    yield delay(1000);
    const user = yield call(apiUser.createUser, action.payload);
    // const user = { name: 'Ivan' };
    yield put({ type: 'USER_POST_SUCCESS', payload: user });
    yield put(push('/channels'))
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

export default [
  userCreateSaga()
]