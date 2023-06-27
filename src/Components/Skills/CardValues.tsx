import React from "react";
import { CardInfo } from "../Card/CardInfo";
import { ConfirmIcon } from "../Icons";
import { Text } from "../Title";

export function CardValues() {
  const classes = "flex items-center gap-3 lg:gap-4";
  return (
    <CardInfo>
      <Text className={classes}>
        <ConfirmIcon /> Fast learning
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Transparency
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Confiability
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Respect
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Integrity
      </Text>
    </CardInfo>
  );
}
