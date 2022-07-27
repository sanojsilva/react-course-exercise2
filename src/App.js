import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 2);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      {count}
      <br />
      <button onClick={handleIncrement}>+ Increment</button>
    </>
  );
}

export default App;
