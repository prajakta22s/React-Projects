import React, { useState } from 'react';
import './Counter.css'; // Import CSS file for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={incrementCount}>+</button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={decrementCount} disabled={count === 0}>-</button>
    </div>
  );
};

export default Counter;
