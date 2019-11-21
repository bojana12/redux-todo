import React, { useState, useEffect } from "react";
import "./AddTodo.scss";

const AddTodo = ({ addTodo }) => {
  const [inputValue, changeInputValue] = useState("");
  const textInput = React.createRef();

  useEffect(() => {
    textInput.current.focus();
  });

  const handleClick = () => {
    addTodo(inputValue);
    changeInputValue("");
  };

  const enterPressed = event => {
    if (event.key === "Enter") {
      addTodo(inputValue);
      changeInputValue("");
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        onChange={e => changeInputValue(e.target.value)}
        onKeyPress={enterPressed}
        value={inputValue}
        className="todo-input"
        ref={textInput}
      />

      <button
        onClick={handleClick}
        disabled={!inputValue}
        className="todo-button"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
