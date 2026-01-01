import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <>
      <h1>{num}</h1>

      <button onClick={() => {
        setNum(num + 1)
      }}>
        inc
      </button>

      <button onClick={() => {
        setNum(num - 1)
      }}>
        dec
      </button>
    </>
  );
}

export default App;
