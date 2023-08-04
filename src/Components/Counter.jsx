import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(count === 0);
  };

  return (
    <div className="body">
      <div className="text-center">
        <h1 className="text-light">Count: {count}</h1>

        <button className="btn btn-secondary m-1" onClick={increment}>
          Count
        </button>
        <button className="btn btn-danger m-1" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-secondary m-1" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
