import { combineReducers } from "redux";
import notes from "./reducers/notesReducer" // can name courses since we used 'export default'


const rootReducer = combineReducers({
  notes  
});

export default rootReducer;