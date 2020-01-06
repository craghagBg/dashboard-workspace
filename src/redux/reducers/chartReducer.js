import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.charts, action) => {
  switch (action.type) {
    case types.LOAD_CHARTS_SUCCESS:
      return action.charts;
    default:
      return state;
  }
};
