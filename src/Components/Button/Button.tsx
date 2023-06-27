import React from "react";

export function Button({ children, className }: any) {
  return (
    <button
      className={`h-7 lg:h-12 bg-gradient-to-r to-[#2D0870] from-[#F9577E] hover:text-black transition-all duration-300 ease-in-out rounded lg:rounded-xl text-white lg:text-sm text-[0.5rem] px-4 lg:px-0 font-hanson font-medium tracking-[0.096rem] lg:tracking-[0.17rem] ${className}`}
    >
      {children}
    </button>
  );
}
