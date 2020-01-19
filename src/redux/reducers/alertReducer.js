import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.alerts, action) => {
  switch (action.type) {
    case types.CREATE_ALERT:
      return [...state, action.alert];
    case types.DELETE_ALERT:
      return [...state, action.alert];
    default:
      return state;
  }
};
