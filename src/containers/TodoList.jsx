import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions/index";

const filter = (name, todos) => {
  if (name === "completed") {
    return todos.filter(todo => todo.completed);
  } else if (name === "active") {
    return todos.filter(todo => !todo.completed);
  } else {
    return todos;
  }
};

const TodoListContainer = props => {
  return <TodoList {...props} />;
};

const mapStateToProps = state => {
  return {
    todos: filter(state.filter, state.todos)
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoListContainer);
