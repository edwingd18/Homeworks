import { useState } from 'react';

function useCounter() {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };
  const substract = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    increment,
    substract,
    reset
  };
}

export default useCounter;
