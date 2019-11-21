import React from "react";
import "./TodoFilters.scss";

const TodoFilters = ({ setFilter, filter }) => {
  return (
    <div className="todo-filters">
      Show:
      <button
        className="all-button"
        onClick={() => setFilter("all")}
        style={{
          background: filter === "all" ? "#e0ccff" : ""
        }}
      >
        All
      </button>
      <button
        className="active-button"
        onClick={() => setFilter("active")}
        style={{
          background: filter === "active" ? "#ff6666" : ""
        }}
      >
        Active
      </button>
      <button
        className="completed-button"
        onClick={() => setFilter("completed")}
        style={{
          background: filter === "completed" ? "#80ff80" : ""
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilters;
