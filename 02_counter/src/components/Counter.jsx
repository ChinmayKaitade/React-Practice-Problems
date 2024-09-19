import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1);
  }

  function decrementHandler() {
    setCount(count - 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl uppercase text-orange-400 font-semibold">
        Basic Counter App
      </h1>

      <div className="flex space-x-5 mt-2 px-4 py-1 items-center justify-center mt-7 ">
        <button className="text-4xl" onClick={decrementHandler}>
          -
        </button>

        <div className="w-12 text-center text-4xl">{count}</div>

        <button className="text-4xl" onClick={incrementHandler}>
          +
        </button>
      </div>

      <div>
        <button
          className="bg-slate-700 text-3xl mt-7 text-white px-6 py-2 rounded-md hover:bg-slate-800 duration-200 ease-in-out mt-2"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
