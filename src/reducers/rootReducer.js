import {combineReducers} from 'redux'
import navReducer from './navReducer'
import modalReducer from './modalReducer'
import cityReducer from './cityReduser'

const rootReducer = combineReducers({
  nav: navReducer,
  modal: modalReducer,
  city: cityReducer,
})

export default rootReducer
