import React from "react";
import "./TodoList.scss";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : ""
          }}
          className="todo"
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
