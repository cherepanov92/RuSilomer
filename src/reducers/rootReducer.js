import {combineReducers} from 'redux'
import navReducer from './navReducer'
import modalReducer from './modalReducer'
import cityReducer from './cityReduser'
import socialReducer from './socialReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  nav: navReducer,
  modal: modalReducer,
  city: cityReducer,
  social: socialReducer,
  user: userReducer,
})

export default rootReducer
