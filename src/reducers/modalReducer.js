import {MODAL_SHOW_IN, MODAL_SHOW_OUT, MODAL_HIDE} from "../actions/types";

const initialState = {
  show: false,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
      case MODAL_SHOW_IN:
        return { ...state, show: action.payload};
      case MODAL_SHOW_OUT:
          return { ...state, show: action.payload};
      case MODAL_HIDE:
          return { ...state, show: action.payload};
      default:
        return state;
  }
};

export default modalReducer;