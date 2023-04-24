import React from "react";
import { Text, Title } from "../Title";
import { Row } from "../Row";

export function About() {
  return (
    <section className="w-full p-12 mt-8">
      <div className="flex items-center justify-between w-full">
        <Title className="w-1/3 flex items-center gap-2">
          About <span className="text-brand-pink">me</span>
        </Title>
        <Row />
      </div>
      <Text className="my-6">
        Hello, I'm <span className="text-brand-pink">André Lemuel</span>, a
        22-year-old professional with over{" "}
        <span className="text-brand-pink">02 years of experience</span> in the
        blockchain industry. As a community manager, I've gained a reputation as
        one of the best in the world.
      </Text>
      <Text>
        My approach to work is grounded in the values of{" "}
        <span className="text-brand-pink">love</span>,{" "}
        <span className="text-brand-pink">transparency</span>, and{" "}
        <span className="text-brand-pink">loyalty</span>. These values guide my
        decisions and actions as a professional, ensuring that I always act with
        integrity and respect towards my{" "}
        <span className="text-brand-pink">colleagues</span> and{" "}
        <span className="text-brand-pink">clients</span>.
      </Text>
    </section>
  );
}
