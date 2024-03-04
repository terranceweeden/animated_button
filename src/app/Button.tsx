"use client";

import { ReactNode, useState } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col p-4 justify-center gap-4 items-center">
      <span>Count: {count} </span>
      {
        <button
          onClick={handleClick}
          className="bg-blue-600 rounded-lg p-4 font-bold text-white cursor-pointer"
        >
          {children}
        </button>
      }
    </div>
  );
}
