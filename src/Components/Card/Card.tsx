import React from "react";
import { Text, Title } from "../Title";

type Props = {
  onClick: () => void;
  item: {
    title: string;
    subtitle: string;
    list1: string;
    list2: string;
    body: string;
    date1: string;
    date2: string;
  };
};

export const Card: React.FC<Props> = ({ onClick, item }) => {
  return (
    <div
      onClick={onClick}
      className="w-full flex justify-center items-center cursor-pointer p-[7px] bg-gradient-to-br from-[rgba(249,87,126,1)] to-[rgba(45,8,112,1)] rounded-2xl"
    >
      <div className="flex flex-col justify-center items-start w-full h-full hover:bg-[#111111] bg-black p-12 gap-8 rounded-xl transition-all duration-300 ease-in-out">
        <div className="flex flex-col gap-4">
          <div>
            <Text className="text-xl">{item.title}</Text>
            <Text className="text-lg">
              <span className="text-brand-pink">{item.subtitle}</span>
            </Text>
          </div>
          {item.list1 === "" ? (
            <Text className="text-base mt-2">{item.body}</Text>
          ) : (
            <div className="mt-2 ml-2 text-white">
              <Text className="text-base flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full" />
                {item.list1}
              </Text>
              <Text className="text-base flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full" />
                {item.list2}
              </Text>
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center">
          <Text>{item.date1} - </Text>
          <Text className="text-brand-pink">
            <span className="text-brand-pink">{item.date2}</span>
          </Text>
        </div>
      </div>
    </div>
  );
};
