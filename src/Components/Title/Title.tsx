import React from "react";

export function Title({ children, className }: any) {
  return (
    <h1 className={`text-white font-hanson font-bold tracking-[0.17rem] text-[15px] lg:text-[32px] ${className}`}>{children}</h1>
  );
}
