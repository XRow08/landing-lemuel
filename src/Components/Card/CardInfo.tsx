import React from "react";

export function CardInfo({ children }: any) {
  return (
    <div className="w-full flex justify-start items-start p-1 lg:p-[7px] bg-gradient-to-b from-[rgba(249,87,126,1)] to-[rgba(45,8,112,1)] rounded-2xl">
      <div className="flex flex-col justify-start items-start w-full h-full bg-black p-4 lg:p-14 gap-8 rounded-xl text-[0.7rem] lg:text-base">
        {children}
      </div>
    </div>
  );
}
