/**
 * Created by itersh on 17.04.2018.
 */
export const types = { post: 'post' };

export const getMessages = () => (dispatch, getState) =>
  dispatch({ type: 'MESSAGES_GET_START' });

export const getMessage = id => (dispatch, getState) =>
  dispatch({ type: 'MESSAGE_GET_START', payload: id });

export const deleteMessage = id => (dispatch, getState) =>
  dispatch({ type: 'MESSAGE_DELETE_START', payload: id });

export const createMessage = data => (dispatch, getState) =>
  dispatch({ type: 'MESSAGE_POST_START', payload: data });

export const joinMessage = data => (dispatch, getState) =>
  dispatch({ type: 'MESSAGE_JOIN_START', payload: data });
