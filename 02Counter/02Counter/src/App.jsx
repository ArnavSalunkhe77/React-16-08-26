import  { useState } from 'react'

function App() {
  const [count, setCount] = useState(0); // count is the state var and setCount is the function to update the state var
  
  const addVal = ()=> {
    setCount(count + 1);
    if(count == 20){
      setCount(20);
    }
  }
  const decVal = ()=> {
    setCount(count - 1);
    if(count == 0){
      setCount(0);
    }
  }
  return (
    <>
    <h1>Cold Coffee and Waffles </h1>
    <h2>Counter : {count}</h2>
    <button onClick={addVal}>Increment</button> <br/>
    <button onClick={decVal}>Decrement</button>
    </>
  )
}

export default App
