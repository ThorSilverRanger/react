import React, { useState } from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length >= 3) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue("");
    } else {
      alert("Task must be at least 3 characters long!");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <React.Fragment>
      <h1>Todo List</h1>
      <form className="add-task" onSubmit={handleSubmit}>
        <input
          placeholder="Add your task here"
          className="add-task input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-task button" type="submit">
          Add Todo
        </button>
      </form>
    </React.Fragment>
  );
};

export default connect()(AddTodo);