import {
  SET_CITY_RESOLVE,
  SET_CITY_REJECT,
  SET_DEFAULT_CITY,
} from '../actions/types';

const initialState = {
  geoLocationCheked: false,
  allowGeoLocation: false,
  cityDictionary: {
    city: 'Екатеринбург',
    city_slug: 'Yekaterinburg',
    region_slug: "Sverdlovskaya oblast'",
  },
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_RESOLVE:
      return {
        ...state,
        geoLocationCheked: true,
        allowGeoLocation: true,
        cityDictionary: action.payload,
      };
    case SET_CITY_REJECT:
      return {
        ...state,
        geoLocationCheked: true,
        allowGeoLocation: true,
        cityDictionary: initialState.cityDictionary,
      };
    case SET_DEFAULT_CITY:
      return {
        ...state,
        geoLocationCheked: true,
        allowGeoLocation: false,
        cityDictionary: initialState.cityDictionary,
      };
    default:
      return state;
  }
};

export default cityReducer;
