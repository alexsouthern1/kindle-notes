import { combineReducers } from "redux";
import courses from "./courseReducer"; // can name courses since we used 'export default'

const rootReducer = combineReducers({
  courses: courses,
});

export default rootReducer;

