'use client';

import { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');  // Clear the input after adding
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="input"
      />
      <button
        type="submit"
        className="button"
      >
        Add
      </button>
    </form>
  );
} 