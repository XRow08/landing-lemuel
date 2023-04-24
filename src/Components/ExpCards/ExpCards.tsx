import React from "react";
import { data } from "./data";
import { Card } from "../Card";
import { Title } from "../Title";
import { Row } from "../Row";

export const ExpCards = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-12 mt-12">
        <Title className="w-[30rem] flex items-center gap-2">Experience</Title>
        <Row />
      </div>
      <div className="grid grid-cols-2 p-12 gap-8">
        {data.map((item) => (
          <Card item={item} onClick={onClick} />
        ))}
      </div>
    </>
  );
};
