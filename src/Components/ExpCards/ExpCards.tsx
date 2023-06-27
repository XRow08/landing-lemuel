import React from "react";
import { data } from "./data";
import { Card } from "../Card";
import { Title } from "../Title";
import { Row } from "../Row";

export const ExpCards = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-6 lg:px-12 mt-12">
        <Title className="w-[30rem] flex items-center gap-2">Experience</Title>
        <Row />
      </div>
      <div className="grid grid-cols-2 p-6 lg:p-12 gap-4 lg:gap-8">
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};
