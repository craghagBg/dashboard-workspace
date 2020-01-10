import * as types from "./actionTypes";
import * as chartApi from "../../api/chartApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadChartsSuccess(chartsData) {
  return { type: types.LOAD_CHARTS_SUCCESS, chartsData };
}

export function setCurrentChart(currentChartName) {
  return { type: types.SET_CURRENT_CHART, currentChartName };
}

export function loadCharts() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return chartApi
      .getCharts()
      .then(chartsData => {
        dispatch(loadChartsSuccess(chartsData));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
