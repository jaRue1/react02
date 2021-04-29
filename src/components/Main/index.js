import React , { useState } from 'react'

function Main(){
  const [counter,setCounter] = useState(0)
  return (
    <>
    {/* Using State to increment and decrement the counter with setCounter */}
    <p>The count is { counter }</p> <br/>
    <button onClick = {() => setCounter(counter + 1)} >Increase Count</button>
    <button onClick = {() => setCounter(0)} >Reset Count</button>
    <button onClick = {() => setCounter (Math.max(0,counter - 1))} >Decrease Count</button>
    </>
    )
}

export default Main