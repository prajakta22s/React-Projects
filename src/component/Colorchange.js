import React, { useState } from 'react'

const Colorchange = () => {
    const [backgroundColor,setBackgroundColor] = useState('yellow');
    const handleClick = () =>{
        const newColor = backgroundColor === 'yellow' ? 'red' : 'yellow';
        setBackgroundColor(newColor)
    };
  return (
    <div onClick={handleClick}
     style={{
        backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
    }}>
        Click me to change color
      
    </div>
  )
}

export default Colorchange;
