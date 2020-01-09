import { combineReducers } from "redux";
import charts from "./chartReducer";
import alerts from "./alertReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  charts,
  alerts,
  apiCallsInProgress
});

export default rootReducer;
