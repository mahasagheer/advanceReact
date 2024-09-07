import React from "react";
import { useContext } from "react";
import { CounterContext } from "../components/CountContext";
const Increment = () => {
  const { increment } = useContext(CounterContext);
  return (
    <>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Increment;
