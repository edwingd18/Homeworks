import { useState } from 'react';

function useCounter() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  const performOperation = (operation) => {
    switch (operation) {
      case 'Add':
        handleAdd();
        break;
      case 'Subtract':
        handleSubtract();
        break;
      case 'Reset':
        handleReset();
        break;
      default:
        break;
    }
  };

  return {
    counter,
    performOperation,
  };
}

export default useCounter;
