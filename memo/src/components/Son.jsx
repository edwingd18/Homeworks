import React, { memo } from "react";

export const Son = memo(
  ({ numero, increment }) => {
  console.log("again reloaded...");

  return (
    <button
      onClick={() => {
        increment(numero);
      }}
    >
      {numero}
    </button>
  );
});
