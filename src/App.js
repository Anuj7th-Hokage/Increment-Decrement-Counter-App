import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreHandler() {
    setCount(count - 1);
  }

  function increHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#1e293b] to-[#334155] text-white font-sans">
      <h1 className="text-4xl font-bold mb-8 text-[#38bdf8] drop-shadow-lg">
        🔢 Increment & Decrement
      </h1>

      <div className="bg-white rounded-xl px-10 py-6 flex items-center gap-16 shadow-2xl">
        <button
          onClick={decreHandler}
          className="text-red-500 text-5xl font-bold px-5 py-2 hover:bg-red-100 transition-all rounded-lg border-r border-gray-300"
        >
          −
        </button>

        <span className="text-6xl text-[#0f172a] font-extrabold">{count}</span>

        <button
          onClick={increHandler}
          className="text-green-500 text-5xl font-bold px-5 py-2 hover:bg-green-100 transition-all rounded-lg border-l border-gray-300"
        >
          +
        </button>
      </div>

      <button
        onClick={resetHandler}
        className="mt-10 bg-[#38bdf8] hover:bg-[#0ea5e9] transition-all px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
      >
        🔄 Reset
      </button>
    </div>
  );
}

export default App;
