/**
 * Created by itersh on 07.03.2018.
 */
export const types = { post: 'post' };

export const getChannels = () => (dispatch, getState) =>
  dispatch({ type: 'CHANNELS_GET_START' });

export const getChannel = id => (dispatch, getState) =>
  dispatch({ type: 'CHANNEL_GET_START', payload: id });

export const deleteChannel = id => (dispatch, getState) =>
  dispatch({ type: 'CHANNEL_DELETE_START', payload: id });

export const createChannel = data => (dispatch, getState) =>
  dispatch({ type: 'CHANNEL_CHANNEL_START', payload: data });

export const joinChannel = data => (dispatch, getState) =>
  dispatch({ type: 'CHANNEL_JOIN_START', payload: data });
