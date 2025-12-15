"use client";

export default function AntalTilKurv({ count, setCount }) {
  return (
    <div className="flex flex-row w-full items-center gap-4 ">
      <p
        className="w-[12vw] h-[12vw] rounded-full bg-gray-300 flex items-center justify-center text-3xl font-helvetica bg-gradient-to-br from-purple-400/60 to-blue-300/40 backdrop-blur-md border border-purple-200/20 shadow-lg"
        onClick={() => setCount((c) => Math.max(1, c - 1))}
      >
        -
      </p>
      <p className="font-helvetica text-5xl font-bold ">{count}</p>
      <p
        className="w-[12vw] h-[12vw] rounded-full bg-gray-300 flex items-center justify-center font-helvetica text-3xl bg-gradient-to-br from-purple-400/60 to-blue-300/40 backdrop-blur-md border border-purple-200/20 shadow-lg"
        onClick={() => setCount((c) => Math.min(10, c + 1))}
      >
        +
      </p>
    </div>
  );
}
