import TodoApp from './components/TodoApp';

export default function Home() {
  return (
    <main className="main-background">
      <div className="container">
        <h1 className="text-center text-white text-3xl font-bold mb-8">
          To Do List
        </h1>
        <TodoApp />
      </div>
    </main>
  );
} 