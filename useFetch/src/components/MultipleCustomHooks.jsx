import React from "react";
import { useFetch } from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";

function MultipleCustomHooks() {
  const { counter, increment } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <blockquote>
          <p>{data[0]?.quote}</p>
          <footer>{data[0]?.author}</footer>
        </blockquote>
      )}

      <button onClick={() => increment()}>Next Quote</button>
    </>
  );
}

export default MultipleCustomHooks;
