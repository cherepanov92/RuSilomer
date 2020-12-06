import {combineReducers} from 'redux'
import navReducer from './navReducer'
import modalReducer from './modalReducer'
import cityReducer from './cityReduser'
import socialReducer from './socialReducer'

const rootReducer = combineReducers({
  nav: navReducer,
  modal: modalReducer,
  city: cityReducer,
  social: socialReducer,
})

export default rootReducer
