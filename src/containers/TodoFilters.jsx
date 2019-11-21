import React from "react";
import { connect } from "react-redux";
import TodoFilters from "../components/TodoFilters";
import { setFilter } from "../actions/index";

const TodoFiltersContainer = props => {
  return <TodoFilters {...props} />;
};

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(TodoFiltersContainer);
