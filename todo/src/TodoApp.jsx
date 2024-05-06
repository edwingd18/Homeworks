import React, { useEffect, useReducer } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoReducer  from "./components/TodoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function TodoApp() {
  const [todos, dispatch] = useReducer(TodoReducer, initialState,  init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
      <hr />

      <div>
        <div>
          <TodoList todos={todos}></TodoList>
        </div>
        <div>
          <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
