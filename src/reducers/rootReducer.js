import {combineReducers} from 'redux'
import {HYDRATE} from 'next-redux-wrapper'
import navReducer from './navReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  nav: navReducer,
  modal: modalReducer,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  } else {
    return rootReducer(state, action)
  }
}

export default reducer
