import { useState } from "react";

function CountButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Click {count}</button>;
}

function App() {
  return (
    <>
      <CountButton />
      <CountButton />
      <CountButton />
      <CountButton />
      <CountButton />
      <br />
      <br />
      <CountButton />
      <br />
      <br />
      <CountButton />
      <br />
      <br />
      <CountButton />
      <br />
      <br />
      <CountButton />
    </>
  );
}

/* function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <button onClick={handleClick} className="Btn">
      Click {count}
    </button>
  );
} */

export default App;
