import React, { useState } from 'react'

const Index = () => {
  const initialData = [
    { id: 1, firstName: 'Akhil', lastName: 'Reddy', age: 23 },
    { id: 2, firstName: 'Raj', lastName: 'Kumar', age: 22 },
    { id: 3, firstName: 'Viraj', lastName: 'Ashwin', age: 21 },
  ]

  const [data, setData] = useState(initialData)

  /* const changeName = () => {
    setData({
      ...data,
      firstName: 'Akshay',
      lastName: 'Kumar',
    })
  }

  const changeAge = () => {
    setData({
      ...data,
      age: 25,
    })
  } */
  const handleDelete = (comingId) => {
    const filteredData = data.filter((eachItem) => {
      return eachItem.id !== comingId
    })
    setData(filteredData)
  }

  return (
    <div>
      <ul>
        {data.map((eachItem, index) => (
          <li key={index}>
            <p>
              My firstName is <strong>{eachItem.firstName}</strong>
            </p>
            <p>My lastName is {eachItem.lastName}</p>
            <p>My age is {eachItem.age}</p>
            <button onClick={() => handleDelete(eachItem.id)}>
              Delete Name
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Index
