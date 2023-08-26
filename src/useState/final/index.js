import React, { useState, useEffect } from 'react'
import './index.css'
const Index = () => {
  const [count, setCount] = useState(0)
  const [pageWidth, setPageWidth] = useState(window.innerWidth)
  const handleCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const resizeHandler = () => {
      setPageWidth(window.innerWidth)
    }
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  })
  return (
    <div>
      <h1>{count}</h1>
      <h1>{pageWidth}</h1>
      <button onClick={handleCount}>Increase</button>
    </div>
  )
}

export default Index
