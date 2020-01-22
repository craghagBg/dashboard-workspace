import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.pairs, action) => {
  switch (action.type) {
    case types.ADD_PAIR:
      return [...state, { id: action.id, title: action.title }];
    case types.DELETE_PAIR: {
      return state.filter(pair => pair.id !== action.id);
    }
    default:
      return state;
  }
};
