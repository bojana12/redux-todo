import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: []
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
        todos: [
          ...state.todos.map(todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        ]
      };

    default:
      return state;
  }
};
