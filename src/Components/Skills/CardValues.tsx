import React from "react";
import { CardInfo } from "../Card/CardInfo";
import { ConfirmIcon } from "../Icons";
import { Text } from "../Title";

export function CardValues() {
  return (
    <CardInfo>
      <Text className="flex items-start gap-4">
        <ConfirmIcon /> Fast learning
      </Text>
      <Text className="flex items-start gap-4">
        <ConfirmIcon /> Transparency
      </Text>
      <Text className="flex items-start gap-4">
        <ConfirmIcon /> Confiability
      </Text>
      <Text className="flex items-start gap-4">
        <ConfirmIcon /> Respect
      </Text>
      <Text className="flex items-start gap-4">
        <ConfirmIcon /> Integrity
      </Text>
    </CardInfo>
  );
}
