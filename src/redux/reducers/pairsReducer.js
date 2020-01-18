import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.pairs, action) => {
  switch (action.type) {
    case types.ADD_CHART:
      return [...state, action.pair];
    default:
      return state;
  }
};
