import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.pairs, action) => {
  switch (action.type) {
    case types.ADD_PAIR:
      return [...state, action.pair];
    case types.DELETE_PAIR: {
      const newState = [...state];
      newState.splice(action.id, 1);
      return newState;
    }
    default:
      return state;
  }
};
