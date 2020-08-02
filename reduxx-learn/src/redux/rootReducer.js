import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cookieReducer from "./cookie/cookieReducer";
import { addTodo } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  cookie: cookieReducer,
  todos: addTodo,
});

export default rootReducer;
