import { combineReducers } from "redux";
import charts from "./chartReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  charts,
  apiCallsInProgress
});

export default rootReducer;
