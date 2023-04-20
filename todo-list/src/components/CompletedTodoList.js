import React from 'react';

function CompletedTodoList({ todos, handleDeleteCompleted }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={handleDeleteCompleted}>Delete Completed</button>
    </div>
  );
}

export default CompletedTodoList;
