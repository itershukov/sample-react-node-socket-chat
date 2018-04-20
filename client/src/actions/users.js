/**
 * Created by itersh on 07.03.2018.
 */
export const types = { user: 'user' };

export const getUsers = () => (dispatch, getState) =>
  dispatch({ type: 'USERS_GET_START' });
// ({type: "USERS_GET_START"})

export const getUser = id =>
  // (dispatch, getState) =>
  ({ type: 'USER_GET_START', payload: id });

export const deleteUser = id =>
  // (dispatch, getState) =>
  ({ type: 'USER_DELETE_START', payload: id });

export const createUser = data =>
  // (dispatch, getState) =>
  ({ type: 'USER_POST_START', payload: data });

export const updateUser = data =>
  // (dispatch, getState) =>
  ({ type: 'USER_PUT_START', payload: data });
