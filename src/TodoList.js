import React from 'react';
import { useTodos } from './TodoContext';
import './TodoList.css';

const TodoList = () => {
  const { state, dispatch } = useTodos();

  const handleDelete = id => dispatch({ type: 'DELETE_TODO', payload: id });
  const handleToggle = id => dispatch({ type: 'TOGGLE_TODO', payload: id });

  return (
    <ul className="todo-list">
      {state.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
