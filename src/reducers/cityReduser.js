import {SET_CITY} from "../actions/types";

const initialState = {
  cityDictionary: {
                    city: "Екатеринбург",
                    city_slug: "Yekaterinburg",
                    region_slug: "Sverdlovskaya oblast'",
                  },
}

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_CITY:
        return { ...state, cityDictionary: action.payload};
      default:
        return state;
  }
};

export default cityReducer;