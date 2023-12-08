import { useEffect } from "react";
import { useMemo, useState } from "react";
import List from "./components/List";
import { useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    console.log("theme changed");
  }, [dark]);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const getItems = useCallback(() => {
    console.log("callback is working");
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <>
      <h1>Lesson-9</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <h2>{doubleNumber}</h2>
      <List getItems={getItems} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyle}>Hello world</div>
    </>
  );
}

function slowFunction(num) {
  console.log("slowFunction is working");
  for (let index = 0; index < 1000000; index++) {}
  return num * 2;
}

export default App;
