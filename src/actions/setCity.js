import { SET_CITY_RESOLVE, SET_CITY_REJECT, SET_DEFAULT_CITY } from './types';

export const setCityResolve = (cityDictionary) => {
  return {
    type: SET_CITY_RESOLVE,
    payload: cityDictionary,
  };
};

export const setCityReject = () => {
  return {
    type: SET_CITY_REJECT,
  };
};

export const setCityDefault = () => {
  return {
    type: SET_DEFAULT_CITY,
  };
};
