import * as types from "./actionTypes";

export function createAlert(alert) {
  return { type: types.CREATE_ALERT, alert };
}

export function deleteAlert(alert) {
  return { type: types.DELETE_ALERT, alert };
}
