import React, { useState } from "react";
import { useMemo, useRef } from "react";

const UseMemo = () => {
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [total, setTotal] = useState(0);
  const ADD = () => {
    setTotal(valueOne + valueTwo);
  };
  const SUB = () => {
    setTotal(valueOne - valueTwo);
  };
  const DIV = () => {
    setTotal(valueOne / valueTwo);
  };
  const MUL = () => {
    setTotal(valueOne * valueTwo);
  };
  const calculation = useMemo(() => {
    return total;
  }, [total]);
  console.log(calculation);
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center pt-5 bg-purple-400">
        <div className="bg-white p-5 w-[30%] h-auto">
          <div className="flex flex-col gap-4">
            <p className="text-center font-bold">Calculation</p>
            <p className="text-center text-3xl">{calculation}</p>
            <input
              type="number"
              className="border-2 border-purple-400 px-4 p-4 text-xl rounded"
              onChange={(e) => {
                const one = Number(e.target.value);
                setValueOne(one);
              }}
            />
            <input
              type="number"
              className="border-2 border-purple-400 px-4 p-4 text-xl rounded"
              onChange={(e) => {
                const two = Number(e.target.value);
                setValueTwo(two);
              }}
            />
          </div>
          <div className="flex gap-5 mt-5 justify-between mx-5">
            <button onClick={ADD} className="bg-purple-400 p-2 px-4 rounded">
              ADD
            </button>
            <button onClick={SUB} className="bg-purple-400 p-2 px-4 rounded">
              SUB
            </button>
            <button onClick={DIV} className="bg-purple-400 p-2 px-4 rounded">
              DIV
            </button>
            <button onClick={MUL} className="bg-purple-400 p-2 px-4 rounded">
              MUL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseMemo;
