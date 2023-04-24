import React from "react";

export function Button({ children, className }: any) {
  return (
    <button
      className={`h-12 bg-gradient-to-r to-[#2D0870] from-[#F9577E] hover:text-black transition-all duration-300 ease-in-out rounded-xl text-white text-sm font-hanson font-medium tracking-[0.17rem] ${className}`}
    >
      {children}
    </button>
  );
}
