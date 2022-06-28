import {NAV_SHOW_IN, NAV_SHOW_OUT, NAV_HIDE} from '../actions/types'

const initialState = {
  show: 'hidden',
  menuList: {
    1: {
      name: 'упражнения',
      href: '/uprazhneniya',
      desctop: true,
    },
    // 2: {
    //   name: 'программы',
    //   href: '/programmy',
    //   desctop: true,
    // },
    // 3: {
    //   name: 'мероприятия',
    //   href: '/meropriyatiya',
    //   desctop: true,
    // },
    4: {
      name: 'о русском силомере',
      href: '/o-russkom-silomere',
      desctop: true,
    },
    5: {
      name: 'организаторам',
      href: '/organizatoram',
      desctop: true,
    },
    // 6: {
    //   name: 'новости',
    //   href: '/novosti',
    //   desctop: true,
    // },
    7: {
      name: 'контакты',
      href: '/kontakty',
      desctop: true,
    },
    8: {
      name: 'личный кабинет',
      href: '/account',
      desctop: false,
    },
  },
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAV_SHOW_IN:
      return {...state, show: action.payload}
    case NAV_SHOW_OUT:
      return {...state, show: action.payload}
    case NAV_HIDE:
      return {...state, show: action.payload}
    default:
      return state
  }
}

export default navReducer
