/**
 * Created by itersh on 06.03.2018.
 */
import { buildSuccessActionType } from 'helpers/actionHandlerFactory';
// ------------------------------------
// Action Handlers
// -----------------------------------
let ACTION_HANDLERS = {
  [buildSuccessActionType('GET', 'message')]: (state, action) => ({
    ...state,
    messages: {
      ...state.messages,
      [action.payload.id]: action.payload
    }
  }),
  [buildSuccessActionType('JOIN', 'channel')]: (state, action) => ({
    ...state,
    channel: action.payload
  })
};
//custom

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  messages: {},
  channel: {}
};
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
