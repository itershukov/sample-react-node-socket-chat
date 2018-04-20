/**
 * Created by itersh on 08.04.2018.
 */
import { put, takeEvery, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as apiChannel from 'api/channel';
import { push } from 'react-router-redux';

function* getChannels(action) {
  try {
    const channel = yield call(apiChannel.getChannels, action.payload);
    yield put({ type: 'CHANNELS_GET_SUCCESS', payload: channel });
    yield put(push('/channels'));
  } catch (e) {
    yield put({ type: 'CHANNELS_GET_ERROR', payload: e });
  }
}

function* getChannel(action) {
  try {
    const channel = yield call(apiChannel.getChannel, action.payload);
    yield put({ type: 'CHANNEL_GET_SUCCESS', payload: channel });
    yield put(push('/channels'));
  } catch (e) {
    yield put({ type: 'CHANNEL_GET_ERROR', payload: e });
  }
}

function* createChannel(action) {
  try {
    const channel = yield call(apiChannel.createChannel, action.payload);
    yield put({ type: 'CHANNEL_POST_SUCCESS', payload: channel });
    yield put(push('/channels'));
  } catch (e) {
    yield put({ type: 'CHANNEL_POST_ERROR', payload: e });
  }
}

function* createMessage(action) {
  try {
    const msg = yield call(apiChannel.createMessage, action.payload);
    yield put({ type: 'MESSAGE_POST_SUCCESS', payload: msg });
  } catch (e) {
    yield put({ type: 'MESSAGE_POST_ERROR', payload: e });
  }
}

function* joinChannel(action) {
  try {
    const msg = yield call(apiChannel.joinChannel, action.payload);
    yield put({ type: 'CHANNEL_JOIN_SUCCESS', payload: msg });
  } catch (e) {
    yield put({ type: 'CHANNEL_JOIN_ERROR', payload: e });
  }
}

function* leaveChannel(action) {
  try {
    const msg = yield call(apiChannel.leaveChannel, action.payload);
    yield put({ type: 'CHANNEL_LEAVE_SUCCESS', payload: msg });
  } catch (e) {
    yield put({ type: 'CHANNEL_LEAVE_ERROR', payload: e });
  }
}

function* joinChannelSuccess(action) {
  const channel = yield call(
    apiChannel.listenChannel(eventChannel, action.payload.id)
  );

  while (true) {
    const data = yield take(channel);

    if (data.code === 200)
      switch (data.action) {
        case 'NEWMSG':
          yield put({ type: 'MESSAGE_GET_SUCCESS', payload: data.body });
          break;
      }
    else yield put({ type: 'CHANNEL_JOIN_ERROR', payload: data.body });
  }
}

//
// /*
//   Starts fetchUser on each dispatched `USER_REQUESTED` action.
//   Allows concurrent fetches of channel.
// */
function* channelsListenSaga() {
  const channel = yield call(apiChannel.listenChannel(eventChannel));

  while (true) {
    const data = yield take(channel);

    if (data.code === 200)
      switch (data.action) {
        case 'INIT':
          yield put({ type: 'CHANNELS_GET_SUCCESS', payload: data.body });
          break;
        case 'CREATE':
        case 'UPDATE':
          yield put({ type: 'CHANNEL_GET_SUCCESS', payload: data.body });
          break;
      }
    else yield put({ type: 'CHANNEL_GET_ERROR', payload: data.body });
  }
}

function* channelsGetSaga() {
  yield takeEvery('CHANNELS_GET_START', getChannels);
}

function* channelGetSaga() {
  yield takeEvery('CHANNEL_GET_START', getChannel);
}

function* channelCreateSaga() {
  yield takeEvery('CHANNEL_POST_START', createChannel);
}

function* messageCreateSaga() {
  yield takeEvery('MESSAGE_POST_START', createMessage);
}

function* channelJoinSaga() {
  yield takeEvery('CHANNEL_JOIN_START', joinChannel);
}

function* channelLeaveSaga() {
  yield takeEvery('CHANNEL_LEAVE_START', leaveChannel);
}

function* channelJoinSuccessSaga() {
  yield takeEvery('CHANNEL_JOIN_SUCCESS', joinChannelSuccess);
}

export default [
  channelsGetSaga(),
  channelGetSaga(),
  messageCreateSaga(),
  channelJoinSaga(),
  channelLeaveSaga(),
  channelJoinSuccessSaga(),
  channelCreateSaga(),
  channelsListenSaga()
];
