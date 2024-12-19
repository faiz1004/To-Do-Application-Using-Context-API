import React, { useState } from 'react';
import { useTodos } from './TodoContext';
import './AddTodo.css';

const AddTodo = () => {
  const { dispatch } = useTodos();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
