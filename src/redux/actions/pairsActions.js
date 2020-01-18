import * as types from "./actionTypes";

export function addChart(pair) {
  return { type: types.ADD_CHART, pair };
}
