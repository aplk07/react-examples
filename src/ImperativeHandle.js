import React, { useRef } from "react";
import Button from "./Button";

export const App = () => {
  const ref = useRef();
  return (
    <div>
      <Button ref={ref} />
      <button onClick={() => ref.current.increment()}>Another Button</button>
    </div>
  );
};

export default App;
