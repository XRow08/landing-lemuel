import React from "react";

export function CardInfo({ children }: any) {
  return (
    <div className="w-full flex justify-center items-center p-[7px] bg-gradient-to-b from-[rgba(249,87,126,1)] to-[rgba(45,8,112,1)] rounded-2xl">
      <div className="flex flex-col justify-center items-start w-full h-full bg-black p-14 gap-8 rounded-xl">
        {children}
      </div>
    </div>
  );
}
