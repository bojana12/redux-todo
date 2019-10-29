import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [inputValue, changeInputValue] = useState("");

  const handleClick = () => {
    addTodo(inputValue);
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        onChange={e => changeInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
