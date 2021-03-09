import React, { useState } from "react";

function App() {
  setInterval(lTime, 1000);

  let time = new Date().toLocaleTimeString();
  const [newTime, setTime] = useState(time);

  function lTime() {
    let ntime = new Date().toLocaleTimeString();
    setTime(ntime);
  }

  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={lTime}>Get Time</button>
    </div>
  );
}

export default App;
