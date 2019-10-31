import { combineReducers } from 'redux';

const initialState = {}

/**
 * Returns the updated state value for the provided action
 * Ex: 
 * case MESSAGE_SENT:
      return { ...state, socket: {...state.socket, sentMsg: action.data }}
 */
const appReducer = (state = initialState, action) => {
  return state;
}

export default combineReducers({
  app: appReducer
})