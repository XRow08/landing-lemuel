import React from "react";

export function Text({ children, className }: any) {
  return (
    <p className={`text-white font-montserrat tracking-[0.17rem] ${className}`}>{children}</p>
  );
}
