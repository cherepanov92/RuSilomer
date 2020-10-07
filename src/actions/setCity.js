import {SET_CITY} from "./types";

export const setCity = (cityDictionary) => {
  return {
      type: SET_CITY,
      payload: cityDictionary,
  }
}
