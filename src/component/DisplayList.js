import React from 'react'

const DisplayList = () => {
    const items = [1,2,3,4,5,6,7,8,9,10]
  return (
    <ul>
        {items.map((item,index)=>{
           return <li key={index}>{item}</li>

        })}
    </ul>
      
  )
}

export default DisplayList
