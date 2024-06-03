import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { increment, decrement, reset } from "./redux/Slices/countSlice"
function App() {
  const count = useSelector(state => state.count.value)
  const dispatch = useDispatch()


  const onIncrement = () => {
    dispatch(increment({value: Math.E}))
  }

  const onDecrement = () => {
    if (count <= 0 || count - Math.E < 0) return
      dispatch(decrement({value: Math.E}))
  }

  const onReset = () => {
    dispatch(reset())
  }


  return (
      <>
        
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
        alignItems: 'center', width: '100vw', height: '100vh'}}>

        <div style={{display: 'flex', flexDirection: 'column', 
          justifyContent: 'center', alignItems: 'center'}}>
          <h1>Counter</h1>
          <h3>Value: {count}</h3> 
          <div>
              <button onClick={onIncrement}>incrementar</button>
              <button onClick={onDecrement}>decrementar</button>
              <button onClick={onReset}>resetear</button>
          </div>
        </div>
      </div>  

      </>
  )
}

export default App
