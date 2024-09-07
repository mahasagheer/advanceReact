import { useEffect, useRef } from "react";

const UseRef = () => {
  let counterRef = useRef(0);
  let counterValue = useRef(0);
  const ADD = () => {
    counterRef.current = counterRef.current + 1;
    console.log(counterRef);
    counterValue.current.innerText = counterRef.current;
  };
  const SUB = () => {
    counterRef.current = counterRef.current - 1;
    console.log(counterRef);
    counterValue.current.innerText = counterRef.current;
  };
  useEffect(() => {
    counterValue.current.innerText = counterRef.current;
  }, [counterValue.current]);
  return (
    <>
      <div className="w-full h-[100vh] bg-slate-400 flex justify-center flex-col items-center pt-10">
        <div ref={counterValue}>{counterRef.current}</div>
        <div className="flex gap-4">
          <button className=" bg-slate-50 p-2 rounded-full" onClick={ADD}>
            add
          </button>
          <button className=" bg-slate-50  p-2 rounded-full" onClick={SUB}>
            sub
          </button>
        </div>
      </div>
    </>
  );
};

export default UseRef;
