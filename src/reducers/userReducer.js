import {USER_LOGIN} from '../actions/types'

const initialState = {
  isLogIn: false,
  name: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogIn: true,
        name: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
