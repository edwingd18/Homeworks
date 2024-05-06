import React from 'react'
import TodoItem from "./TodoItem";

function TodoList({todos = []}) {
  return (
      <ul>
          {
           todos.map( (todo, key) => {
               return(
                   <TodoItem key={key} todo={todo}></TodoItem>
               )
           })   
          }
      </ul>
  )
}

export default TodoList