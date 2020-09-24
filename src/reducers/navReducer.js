import { NAV_SHOW, NAV_HIDE } from "../actions/types";

const initialState = {
  show: false,
  menuList : {
    "1": {
      "name": 'упражнения',
      "href": '/uprazhneniya',
    },
    "2": {
      "name": 'программы',
      "href": '/',
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
      case NAV_SHOW:
        return { ...state, show: action.payload};
      case NAV_HIDE:
          return { ...state, show: action.payload};
      default:
        return state;
  }
};

export default navReducer;