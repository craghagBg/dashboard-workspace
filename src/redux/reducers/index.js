import { combineReducers } from "redux";
import pairs from "./pairsReducer";
import charts from "./chartsReducer";
import alerts from "./alertReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  pairs,
  charts,
  alerts,
  apiCallsInProgress
});

export default rootReducer;
