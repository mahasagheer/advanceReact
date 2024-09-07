import React from "react";
import { useContext } from "react";
import { CounterContext } from "../components/CountContext";
const decrement = () => {
  const { decrement } = useContext(CounterContext);
  return (
    <>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default decrement;
