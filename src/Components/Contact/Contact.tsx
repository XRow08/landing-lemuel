import React from "react";

import { Row } from "../Row";
import { Title, Text } from "../Title";
import { Button } from "../Button";

export function Contact() {
  return (
    <section className="px-6 lg:px-12 pb-20">
      <div className="flex items-center justify-between w-full mb-4 lg:mb-8">
        <Title className="min-w-[12rem] lg:min-w-[21rem] w-min flex items-center gap-2">
          Contact-me
        </Title>
        <Row />
      </div>
      <Text className="text-[0.7rem]">
        If you are looking for an{" "}
        <span className="text-brand-pink">experienced</span> and{" "}
        <span className="text-brand-pink">committed</span> professional to drive
        the success of your business, look no further! With my expertise and
        skills in leadership, organization, and communication, I am confident
        that <span className="text-brand-pink">I can help you</span> achieve
        your goals.
      </Text>
      <Text className="my-6 text-[0.7rem]">
        No matter the size or complexity of your project,{" "}
        <span className="text-brand-pink">I am here to make a difference!</span>
      </Text>
      <Text className="text-[0.7rem]">
        Contact me today to discuss how we can collaborate and achieve{" "}
        <span className="text-brand-pink">exceptional</span> results together.
      </Text>
      <Button className="w-[10rem] lg:w-[17rem] float-right mt-8">Hit me up here!</Button>
    </section>
  );
}
