import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const TodoListContainer = props => {
  return <TodoList {...props} />;
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoListContainer);
