import React from "react";
import { CardInfo } from "../Card/CardInfo";
import { ConfirmIcon } from "../Icons";
import { Text } from "../Title";

export function CardSkill() {
  const classes = "flex items-center gap-3 lg:gap-4";
  return (
    <CardInfo>
      <Text className={classes}>
        <ConfirmIcon /> Community Management
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Quest Specialist (Zealy, Galxe, Quest3)
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Chat moderation & Support
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Custumer Service
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Discord Architect / Setup
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Bot customization
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Social Media Manager
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Google Sheets Customization
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Telegram Manager
      </Text>
      <Text className={classes}>
        <ConfirmIcon /> Discord Security Auditor & Expert
      </Text>
    </CardInfo>
  );
}
