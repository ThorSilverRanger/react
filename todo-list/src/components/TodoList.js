import React, { useState, useEffect } from 'react';
import './TodoLIst.css';

function TodoList() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 3, text: 'Task 3', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleNewTaskAdd() {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask('');
    }
  }

  function handleTaskToggle(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function handleCompletedTasksDelete() {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  }

  return (
    <div className='todo-list'>
      <h1 className="title">TODO LIST</h1>
      <div className="container">
      <h2 className="subtitle">Uncompleted tasks:</h2>
      <div className="add-task">
        <input type="text" placeholder='Add your task here' value={newTask} onChange={handleNewTaskChange} />
        <button onClick={handleNewTaskAdd}>Add</button>
      </div>
      <ul>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <li
              key={task.id}
              onClick={() => handleTaskToggle(task.id)}
              className={task.completed ? 'completed' : ''}
            >
              {task.text}
            </li>
          ))}
      </ul>
      {tasks.filter((task) => !task.completed).length === 0 && (
        <p>No uncompleted tasks</p>
      )}
      <h2 className="subtitle">Completed tasks:</h2>
      <ul>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <li
              key={task.id}
              onClick={() => handleTaskToggle(task.id)}
              className={task.completed ? 'completed' : ''}
            >
              {task.text}
            </li>
          ))}
      </ul>
      {tasks.filter((task) => task.completed).length > 0 && (
        <button onClick={handleCompletedTasksDelete} className="delete-button">
          Delete completed tasks
        </button>
      )}
      {tasks.filter((task) => task.completed).length === 0 && (
        <p>No completed tasks</p>
      )}
    </div>
    </div>

  );
}

export default TodoList;
