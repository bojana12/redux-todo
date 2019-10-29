
import React from 'react';
import '../App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      <TodoFilters/>
    </div>
  );
}

export default App;
