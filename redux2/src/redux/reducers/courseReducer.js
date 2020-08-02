import { CREATE_COURSE } from "../actionTypes"
import initialState from "../initialState";

const courseReducer = (state=initialState, action) => {
  switch(action.type) {
    case CREATE_COURSE: {
      console.log("action is ", action, 'state is', state);                  
      return {
        ...state, 
        courses: [...state.courses, action.payload ]
      };
    }
    default:
        return state;
  }
}

export default courseReducer;