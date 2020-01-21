import * as types from "./actionTypes";

export function createAlert(alert) {
  return { type: types.CREATE_ALERT, alert };
}

export function deleteAlert(id) {
  return { type: types.DELETE_ALERT, id };
}
