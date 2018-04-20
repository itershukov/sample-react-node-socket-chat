/**
 * Created by itersh on 06.03.2018.
 */
import { buildSuccessActionType } from 'helpers/actionHandlerFactory';
// ------------------------------------
// Action Handlers
// -----------------------------------
let ACTION_HANDLERS = {
  [buildSuccessActionType('GET', 'channels')]: (state, action) => ({
    ...state,
    ...action.payload.reduce((acc, ch) => {
      acc[ch.id] = ch;
      return acc;
    }, {})
  }),
  [buildSuccessActionType('GET', 'channel')]: (state, action) => ({
    ...state,
    [action.payload.id]: action.payload
  })
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
