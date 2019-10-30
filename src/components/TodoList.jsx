import React from "react";

const TodoList = ({ todos, completed, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            color: completed ? "red" : "blue"
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
