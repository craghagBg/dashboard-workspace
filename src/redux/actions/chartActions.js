import * as types from "./actionTypes";
import * as chartApi from "../../api/chartApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadChartsSuccess(charts) {
  return { type: types.LOAD_CHARTS_SUCCESS, charts };
}

export function loadCharts() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return chartApi
      .getCharts()
      .then(charts => {
        console.log(charts);
        dispatch(loadChartsSuccess(charts));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
