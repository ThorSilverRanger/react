import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span className="text">{todo.text}</span>
      </label>
    </li>
  );
}

export default TodoItem;
