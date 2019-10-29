import React from "react";
import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";
import { addTodo } from "../actions/index";

const AddTodoContainer = props => {
  return <AddTodo {...props} />;
};

export default connect(
  undefined,
  {
    addTodo
  }
)(AddTodoContainer);
