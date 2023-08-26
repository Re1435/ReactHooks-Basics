import React, { useState } from 'react'
import './index.css'
const Index = () => {
  const [count, setCount] = useState(0)
  const decreaseCount = () => {
    setCount(count - 1)
    // setCount((prevCount) => prevCount - 1)
    // setCount((prevCount) => prevCount - 1)
  }

  const increaseCount = () => {
    setCount(count + 1)

    // setCount((prevCount) => {
    //   return prevCount + 1
    // })

    // setCount((prevCount) => {
    //   return prevCount + 1
    // })
  }
  return (
    <div>
      <h1>React Basics</h1>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default Index
