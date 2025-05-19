import React from 'react';
import { FaTrash } from 'react-icons/fa';
import type { TodoItemProps } from '../types/todo';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        <FaTrash /> Delete
      </button>
    </div>
  );
};

export default TodoItem; 