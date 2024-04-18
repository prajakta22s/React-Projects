import React, { useState } from 'react'

function Form() {
    const [input,setInput] = useState('');
  return (
    <div>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <p>User Input :{input}</p>

    </div>
  )
}

export default Form