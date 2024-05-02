import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>     
      <div className="button-container">
              <button onClick={() => setCount(count - 1)} className="button-counter">-</button>
              <span>{count}</span>
        <button onClick={() => setCount(count + 1)} className="button-counter">+</button>
      </div>
    </div>
  );
}
export default Counter