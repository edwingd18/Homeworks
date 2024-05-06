import React, { useState } from 'react';
import useCounter from './hooks/useCounter';

function FirstApp() {
  const { counter, performOperation } = useCounter();

  return (
    <>
      <div>
        <h1>Counter</h1>
        <span>{counter}</span>
        <button onClick={() => performOperation('Add')}>+1</button>
        <button onClick={() => performOperation('Subtract')}>-1</button>
        <button onClick={() => performOperation('Reset')}>Reset</button>
      </div>
    </>
  );
}

export default FirstApp;