import {SET_SOCIAL} from '../actions/types'

const initialState = {
  social: [],
}

const socialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCIAL:
      return {
        ...state,
        social: action.payload,
      }
    default:
      return state
  }
}

export default socialReducer
