import React from "react";
import { Text } from "../Title";
import { IData } from "../ExpCards/data";
import { useGlobalModalStateStore } from "../../stores/modals";

type Props = {
  item: IData;
};

export const Card: React.FC<Props> = ({ item }) => {
  const { setShowModal, setItem } = useGlobalModalStateStore((state) => state);
  return (
    <div
      onClick={() => {
        setShowModal(true);
        setItem(item);
      }}
      className="w-full flex justify-center items-center cursor-pointer p-1 lg:p-[7px] max-w-xl bg-gradient-to-br from-[rgba(249,87,126,1)] to-[rgba(45,8,112,1)] rounded-2xl"
    >
      <div className="flex flex-col justify-center items-start w-full h-full hover:bg-[#111111] bg-black p-4 lg:p-12 gap-2 lg:gap-8 rounded-xl transition-all duration-300 ease-in-out">
        <div className="flex flex-col gap-4">
          <div>
            <Text className="text-[0.8rem] lg:text-xl">{item.title}</Text>
            <Text className="text-[0.6rem] lg:text-lg">
              <span className="text-brand-pink">{item.subtitle}</span>
            </Text>
          </div>
          {item.list1 === "" ? (
            <Text className="text-[0.5rem] lg:text-base mt-2">{item.body}</Text>
          ) : (
            <div className="mt-2 ml-2 text-white">
              <Text className="text-[0.5rem] lg:text-base flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full" />
                {item.list1}
              </Text>
              <Text className="text-[0.5rem] lg:text-base flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full" />
                {item.list2}
              </Text>
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center text-[0.5rem] lg:text-base">
          <Text>{item.date1} - </Text>
          <Text className="text-brand-pink">
            <span className="text-brand-pink">{item.date2}</span>
          </Text>
        </div>
      </div>
    </div>
  );
};
