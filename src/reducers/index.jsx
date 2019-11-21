import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "../actions";

const initialState = {
  todos: [],
  filter: "all"
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            id: action.id,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        ]
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.name
      };

    default:
      return state;
  }
};
