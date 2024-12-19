import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';
import './App.css';

const App = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>To-Do App</h1>
        <AddTodo />
        <UpdateTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
