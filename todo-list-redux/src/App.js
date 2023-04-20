import React from "react";
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import Filters from "./containers/Filters";
import "./App.css";

const App = () => (
  <div className="todo-list">
    <AddTodo />
    <TodoList />
    <Filters />
  </div>
);

export default App;