import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload
      let idx = state.allIds.indexOf(id)
      const oldIds = state.allIds
      console.log("Old ids before splice " + oldIds);
      oldIds.splice(idx, 1)  
      console.log("Old ids after splice " + oldIds);      

      return Object.assign({}, state, {
        allIds: oldIds
      })
    }
    default:
      return state;
  }
}
