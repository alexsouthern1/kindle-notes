import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    </Provider>
  );
}

export default App;
