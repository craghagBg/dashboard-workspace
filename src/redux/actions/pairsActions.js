import * as types from "./actionTypes";

export function addPair(pair) {
  return { type: types.ADD_PAIR, pair };
}
