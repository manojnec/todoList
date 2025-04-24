'use client';

import { Todo } from './TodoApp';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoList({ todos, toggleTodo, removeTodo }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="text-center" style={{color: '#a0aec0', padding: '1rem 0'}}>No to-dos yet. Add some!</p>;
  }

  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          removeTodo={removeTodo} 
        />
      ))}
    </div>
  );
} 