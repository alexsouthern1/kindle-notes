import React, { useEffect } from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css"

const TodoList = () => {
  const todoIds = useSelector((state) => state.todos.allIds);
  const todos = useSelector((state) => state.todos.byIds);

  useEffect(() => {
    console.log(todoIds);
    console.log(todos);
    console.log(todos[1]);
  }, [todos]);

  return (
    <div className="todo-list">
      {todoIds && todoIds.length
        ? todoIds.map((todo, index) => {
            return <Todo key={`todo-${todo}`} todo={todos[todo]} todoID={todo}/>;
          })
        : "No todos, yay!"}
    </div>
  );
};

export default TodoList;
