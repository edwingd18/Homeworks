import React from 'react'

function TodoItem({todo}) {
  return (
      <li>
          <span>{todo.description}</span>
          <button>Borrar</button>
      </li>
  )
}

export default TodoItem