import { combineReducers } from "redux";
import pairs from "./pairReducer";
import charts from "./chartReducer";
import alerts from "./alertReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  pairs,
  charts,
  alerts,
  apiCallsInProgress
});

export default rootReducer;
