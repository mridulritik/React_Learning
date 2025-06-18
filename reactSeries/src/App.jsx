import { useState } from "react"


function App() {
  let [counter, setCounter] = useState(15)
  const add = ()=>{
    counter= counter+1
    setCounter(counter)
  }
  return (
    <>
      <h1>counter count {counter}</h1>
      <button onClick={add}>increase button {counter}</button>
    </>
  )
}

export default App
