import React, { useState } from "react";

function App() {
  var [count, setState] = useState(0);

  function increased() {
    setState(count + 1);
  }
  function decreased() {
    setState(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increased}>+</button>
      <button onClick={decreased}>-</button>
    </div>
  );
}

export default App;
