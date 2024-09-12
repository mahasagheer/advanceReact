import { useSelector, useDispatch } from "react-redux";
const redux = () => {
  const myState = useSelector((state) => state.Increment);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center pt-5  bg-orange-300">
        <div className="flex bg-white p-10 justify-between gap-8 text-3xl">
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          {myState}
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
      </div>
    </>
  );
};

export default redux;
