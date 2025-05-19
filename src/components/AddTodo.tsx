import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import type { AddTodoProps } from '../types/todo';

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new to-do"
      />
      <button type="submit">
        <FaPlus /> Add
      </button>
    </form>
  );
};

export default AddTodo; 