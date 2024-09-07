import React from "react";
import { useContext } from "react";
import { CounterContext } from "../components/CountContext";
const Count = () => {
  const { count } = useContext(CounterContext);
  return (
    <>
      <div>{count}</div>
    </>
  );
};

export default Count;
