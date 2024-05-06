import React from "react";

function TodoReducer(initialState = [], action) {
  switch (action.type) {
    case "[TODO] ADD TODO":
      return [...initialState, action.payload];
    default:
      return initialState;
  }
}

export default TodoReducer;
