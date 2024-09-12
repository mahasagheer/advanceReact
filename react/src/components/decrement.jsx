import React, { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "../components/CountContext";
const decrement = () => {
  const { decrement, count } = useContext(CounterContext);
  return (
    <>
      <button onClick={decrement} disabled={count === 0 ? true : false}>
        -
      </button>
    </>
  );
};

export default decrement;
