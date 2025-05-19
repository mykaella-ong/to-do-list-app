import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import type { Todo } from './types/todo';
import './App.css';

const App: React.FC = () => {
  console.log('App component rendering'); // Debug log

  const [todos, setTodos] = useState<Todo[]>(() => {
    console.log('Initializing todos from localStorage'); // Debug log
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    console.log('Todos updated:', todos); // Debug log
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    console.log('Adding new todo:', text); // Debug log
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: string) => {
    console.log('Toggling todo:', id); // Debug log
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    console.log('Deleting todo:', id); // Debug log
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <p>Welcome to your To-Do List App!</p>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
