import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {
  const [description, setDescription] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: true,
    };
    onNewTodo(newTodo);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="tarea"
        className="form-control"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
       
    </form>
  );
};
