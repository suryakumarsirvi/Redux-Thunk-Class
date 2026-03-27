import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByVal, increment, reset } from "../store/features/counter.slice";


const Counter = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  const [customVal, setCustomVal] = useState("");

  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-950 text-white">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-6 shadow-xl">
        <h1 className="text-lg tracking-widest text-zinc-400">COUNTER</h1>

        <div className="text-7xl font-bold tracking-tight">
          {count}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => dispatch(decrement())}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition"
          >
            −
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="px-5 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 active:scale-95 transition"
          >
            Reset
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition"
          >
            +
          </button>
        </div>

        <div className="flex gap-2 w-full">
          <input
            type="number"
            placeholder="Enter value"
            value={customVal}
            onChange={(e) => setCustomVal(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm"
          />

          <button
            onClick={() => {
              dispatch(increaseByVal(Number(customVal)));
              setCustomVal("");
            }}
            className="px-4 py-2 rounded-lg bg-white text-black text-sm hover:bg-zinc-200 active:scale-95 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
