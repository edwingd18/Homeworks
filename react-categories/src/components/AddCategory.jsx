import React from "react";
import { useState } from "react";


function AddCategory({ onAddCategory }) {
  const [inputValue, setInputValue] = useState("...");

    const onInputChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const onSubmit =  (evt) => {
        evt.preventDefault()
        onAddCategory(inputValue)
        setInputValue("")
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input type="text" placeholder="Buscar" value={inputValue} onChange={(event) => onInputChange(event)}/>
      <button type="submit">Send</button>
    </form>
  );
}

export default AddCategory;
