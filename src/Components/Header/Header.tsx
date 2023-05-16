import React from "react";
import { Title, Text } from "../Title";
import { Button } from "../Button";
import {
  InstaIcon,
  LinkedinIcon,
  PortfolioIcon,
  TelegramIcon,
  TwitterIcon,
} from "../Icons";

export function Header() {
  return (
    <>
      <img
        src="/banner.png"
        alt="banner"
        className="w-full h-[17rem] object-cover object-center"
      />
      <div className="absolute lg:top-48 mg:top-60 md:top-[17rem] ml-4 bg-black md:w-[10rem] md:h-[10rem] mg:w-[15rem] mg:h-[15rem] lg:w-80 lg:h-80 rounded-full flex items-center justify-center">
        <img
          src="/perfil.png"
          alt="banner"
          className="w-[85%] h-[85%] object-cover object-center rounded-full self-center"
        />
      </div>

      <div className="w-full flex justify-end">
        <div className="lg:w-[65%] mg:w-[70%] mg:gap-2 h-full flex items-start pr-12 pt-12">
          <div className="w-full">
            <Title>
              Lemuel<span className="text-brand-pink">#2000</span>
            </Title>
            <Text className={"text-2xl mt-1"}>Web3 Community Builder</Text>
            <Text className={"text-xs mt-4 w-[90%]"}>
              Community Manager <span className="text-brand-pink">|</span>{" "}
              Moderator <span className="text-brand-pink">|</span> Telegram
              Manager <span className="text-brand-pink">|</span> Discord
              Security Auditor & Expert.
            </Text>
          </div>
          <div className="w-1/2">
            <Button className={"w-full"}>Send Message</Button>
            <div className="flex items-center justify-between mt-8">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/andrelemuel/"
              >
                <LinkedinIcon />
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/1UOaT7WGo5u-BXRcmQJSbPZW_65ma7JbP?usp=share_link"
              >
                <PortfolioIcon />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/andre_leemuel/"
              >
                <InstaIcon />
              </a>
              <a target="_blank" href="https://t.me/lemuel_cm">
                <TelegramIcon />
              </a>
              <a target="_blank" href="https://twitter.com/0xLemuel">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
