import * as types from "./actionTypes";

export function addPair(pair) {
  return { type: types.ADD_PAIR, pair };
}

export function deletePair(id) {
  return { type: types.DELETE_PAIR, id };
}
