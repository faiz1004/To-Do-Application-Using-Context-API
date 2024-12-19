import React, { useState } from 'react';
import { useTodos } from './TodoContext';
import './UpdateTodo.css';

const UpdateTodo = () => {
  const { state, dispatch } = useTodos();
  const [selectedId, setSelectedId] = useState(null);
  const [text, setText] = useState('');

  const handleUpdate = () => {
    if (selectedId && text.trim()) {
      dispatch({ type: 'UPDATE_TODO', payload: { id: selectedId, text } });
      setSelectedId(null);
      setText('');
    }
  };

  return (
    <div className="update-todo">
      <select
        onChange={e => setSelectedId(Number(e.target.value))}
        value={selectedId || ''}
      >
        <option value="" disabled>
          Select a task to update
        </option>
        {state.map(todo => (
          <option key={todo.id} value={todo.id}>
            {todo.text}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Update task"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateTodo;
