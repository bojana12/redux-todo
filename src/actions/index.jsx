export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

let nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const setFilter = name => ({
  type: SET_FILTER,
  name
});
