import React, { useReducer } from "react";
import Increment from "./increment";
import Count from "./Count";
import Decrement from "./decrement";
const UseReducer = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center pt-5  bg-sky-300">
        <div className="flex bg-white p-10 justify-between gap-8 text-3xl">
          <Increment />
          <Count />
          <Decrement />
        </div>
      </div>
    </>
  );
};

export default UseReducer;
