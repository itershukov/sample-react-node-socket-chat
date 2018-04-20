/**
 * Created by itersh on 06.03.2018.
 */
import { buildSuccessActionType } from 'helpers/actionHandlerFactory';
// ------------------------------------
// Action Handlers
// -----------------------------------
let ACTION_HANDLERS = {
  [buildSuccessActionType('POST', 'logout')]: (state, action) => {
    return {};
  }
};
//custom

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};

export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
