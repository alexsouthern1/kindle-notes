import React, { useEffect } from "react";
// import cx from "classnames";
import { useDispatch } from "react-redux";
import "./Todo.css";
import { toggleTodo, removeTodo } from "../redux";

const Todo = ({ todo, todoID }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("Use effect called from Todo.js");
    // console.log(todo);
    // console.log(todoID);
  }, [todo]);
  // onClick={() => dispatch(toggleTodo(todoID))}
  return (
    <div className="todo-item" >
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <button onClick={() => dispatch(removeTodo(todoID))}>Delete</button>
      {/* <span className={"todo-item__text"}>{todo.content}</span> */}
    </div>
  );
};

export default Todo;
