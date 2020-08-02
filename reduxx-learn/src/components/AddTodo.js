import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux"

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <input onChange={(e) => updateInput(e)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
