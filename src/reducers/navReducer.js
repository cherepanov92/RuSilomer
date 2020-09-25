import {NAV_SHOW_IN, NAV_SHOW_OUT, NAV_HIDE} from "../actions/types";

const initialState = {
  show: 'hidden',
  menuList : {
    "1": {
      "name": 'упражнения',
      "href": '/uprazhneniya',
    },
    "2": {
      "name": 'программы',
      "href": '/programmy',
    },
    "3": {
      "name": 'мероприятия',
      "href": '/',
    },
    "4": {
      "name": 'о русском силомере',
      "href": '/',
    },
    "5": {
      "name": 'организаторам',
      "href": '/',
    },
    "6": {
      "name": 'новости',
      "href": '/',
    },
    "7": {
      "name": 'контакты',
      "href": '/',
    },
  },
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
      case NAV_SHOW_IN:
        return { ...state, show: action.payload};
      case NAV_SHOW_OUT:
          return { ...state, show: action.payload};
      case NAV_HIDE:
          return { ...state, show: action.payload};
      default:
        return state;
  }
};

export default navReducer;