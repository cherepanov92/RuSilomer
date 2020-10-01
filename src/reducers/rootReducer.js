import { combineReducers } from "redux";
import navReducer from './navReducer';
import modalReducer from './modalReducer';


const rootReducer = combineReducers({
  nav: navReducer,
  modal: modalReducer,
});

export default rootReducer;