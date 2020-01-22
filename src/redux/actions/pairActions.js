import * as types from "./actionTypes";

export function addPair(id, title) {
  return { type: types.ADD_PAIR, id, title };
}

export function deletePair(id) {
  return { type: types.DELETE_PAIR, id };
}
