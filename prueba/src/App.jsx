import { useEffect, useReducer } from "react";
import { TodoReducer } from "./assets/TodoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./Components/TodoAdd";
import "./App.css";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp:10,<small>pedientes:2</small>
      </h1>
      <hr />
      <div className="todo">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
