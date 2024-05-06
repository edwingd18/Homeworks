import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FirstApp() {

  const [counter, setCounter] = useState(0)

  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleSubstract = () => {
    setCounter(counter - 1)
  }
  const handleReset = () => {
    setCounter(0)
  }

  return (
    <>
     <h1>Counter</h1>
     <span>{counter}</span>
     <button onClick={() => handleAdd()}>+1</button>
     <button onClick={() => handleSubstract()}>-1</button>
     <button onClick={() => handleReset()}>Reset</button>

    </>
  )
}

export default FirstApp
