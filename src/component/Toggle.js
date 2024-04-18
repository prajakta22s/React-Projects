import React, { useState } from 'react'

const Toggle = () => {
    const [isToggled,setIsToggled] = useState(false);

    const handleToggle=()=>{
        setIsToggled(!isToggled)
    }
  return (
    <div>
      <label>
        <input type='checkbox' onChange={handleToggle}/>
      </label>
      <p>{isToggled ?"ON" : "OFF"}</p>
    </div>
  )
}

export default Toggle
