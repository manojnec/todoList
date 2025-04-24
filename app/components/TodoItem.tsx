'use client';

import { Todo } from './TodoApp';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleTodo, removeTodo }: TodoItemProps) {
  return (
    <div className="todo-item">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          style={{ 
            width: '20px', 
            height: '20px',
            cursor: 'pointer',
            accentColor: '#3182ce'
          }}
        />
        <span 
          className={`todo-text ${todo.completed ? 'completed' : ''}`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="delete-button"
        aria-label="Delete"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  );
} 