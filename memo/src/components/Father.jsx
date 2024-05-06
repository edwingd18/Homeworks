import React, { useState } from "react";
import { useCallback } from "react";
import { Son } from "./Son";
import "../App.css" 

function Father() {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementFather = useCallback((num) => {
    setValor(valor + num);
  }, []);

  return (
    <div>
      <h1>Father</h1>
      <p>Total: {valor}</p>
      <hr />

      {list.map((n, idx) => {
        return <Son key={idx} numero={n} increment={incrementFather} />;
      })}
    </div>
  );
}

export default Father;
