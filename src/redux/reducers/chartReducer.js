import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.charts, action) => {
  switch (action.type) {
    case types.LOAD_CHARTS_SUCCESS:
      return { ...state, chartsData: action.chartsData };
    case types.SET_CURRENT_CHART:
      debugger;
      return { ...state, currentChartName: action.currentChartName };
    default:
      return state;
  }
};
