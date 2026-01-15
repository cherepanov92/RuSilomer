import {combineReducers} from 'redux'
import {HYDRATE} from 'next-redux-wrapper'
import navReducer from './navReducer'
import modalReducer from './modalReducer'
import cityReducer from './cityReduser'

const rootReducer = combineReducers({
  nav: navReducer,
  modal: modalReducer,
  city: cityReducer,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export default reducer
