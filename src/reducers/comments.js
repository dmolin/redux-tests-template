import {SAVE_COMMENT} from '../actions/types'

export const initialState = []
export default function(state = initialState, action = {}) {

  switch(action.type) {
    case SAVE_COMMENT:
      return [ ...state, action.comment ]
      break;
    default:
      return state
  }
}
