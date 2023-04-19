import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function handleToggleComplete(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div>
      <TodoList todos={incompleteTodos} handleToggleComplete={handleToggleComplete} />    
    </div>
  );
}

export default App;
