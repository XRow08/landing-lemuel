import React from "react";
import { CardInfo } from "../Card/CardInfo";
import { ConfirmIcon } from "../Icons";
import { Text } from "../Title";

export function CardSkill() {
  return (
    <CardInfo>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Community Management
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Quest Specialist (Zealy, Galxe, Quest3)
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Chat moderation & Support
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Custumer Service
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Discord Architect / Setup
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Bot customization
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Social Media Manager
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Google Sheets Customization
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Telegram Manager
      </Text>
      <Text className="flex items-center gap-4">
        <ConfirmIcon /> Discord Security Auditor & Expert
      </Text>
    </CardInfo>
  );
}
