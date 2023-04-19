import React, { useState } from 'react';

function TodoForm({ handleAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTodo(newTodo);
    setNewTodo('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={event => setNewTodo(event.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;


