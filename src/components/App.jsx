import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { todoReducer } from "../reducers/";
import "../App.css";
import AddTodoContainer from "../containers/AddTodo";
import TodoListContainer from "../containers/TodoList";
import TodoFiltersContainer from "../containers/TodoFilters";

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodoContainer />
        <TodoListContainer />
        <TodoFiltersContainer />
      </div>
    </Provider>
  );
}

export default App;
