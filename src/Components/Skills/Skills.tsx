import React from "react";
import { Text, Title } from "../Title";
import { CardSkill } from "./CardSkill";
import { CardValues } from "./CardValues";

export function Skills() {
  return (
    <section className="w-full p-6 lg:p-12 flex items-start justify-between gap-4 lg:gap-8">
      <div className="flex flex-col w-1/2 gap-4 lg:gap-8 items-center justify-center">
        <Title className="flex items-center text-center gap-2">Skills</Title>
        <CardSkill />
      </div>
      <div className="flex flex-col w-1/2 items-center gap-4 lg:gap-8 justify-start h-full">
        <Title className="flex items-center text-center">Values</Title>
        <CardValues />
        <Title className="flex items-center text-center mt-8">Languages</Title>
        <div className="flex flex-col gap-4 mt-8 w-full text-xs">
          <div className="flex items-center justify-between w-full">
            <Text>English</Text>
            <div className="h-4 lg:h-7 w-1/2 bg-gradient-to-r to-[#2D0870] from-[#F9577E] rounded-md" />
          </div>
          <div className="flex items-center justify-between w-full">
            <Text>Portuguese</Text>
            <div className="h-4 lg:h-7 w-1/3 bg-gradient-to-r to-[#2D0870] from-[#F9577E] rounded-md" />
          </div>
          <div className="flex items-center justify-between w-full">
            <Text>Spanish</Text>
            <div className="h-4 lg:h-7 w-1/2">
              <div className="w-full h-full bg-gradient-to-r to-[#2D0870] from-[#F9577E] rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
