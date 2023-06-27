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
import useBreakpoints from "../../hooks/useBreakpoints";

export function Header() {
  const { isLg } = useBreakpoints();

  if (isLg) {
    return (
      <>
        <img
          src="/banner.png"
          alt="banner"
          className="w-full h-[17rem] object-cover object-center"
        />
        <div className="absolute top-52 ml-8 bg-black p-4 w-48 h-48 2xl:w-60 2xl:h-60 rounded-full flex items-center justify-center">
          <img
            src="/perfil.png"
            alt="banner"
            className="w-full h-full object-cover object-center rounded-full self-center"
          />
        </div>
        <div className="w-full flex justify-end">
          <div className="w-[65%] mg:w-[70%] mg:gap-2 h-full flex items-start pr-12 pt-12">
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
            <div className="w-1/2 mr-4">
              <a href="https://discord.com/users/315543338109632512">
                <Button className={"w-full"}>Send Message</Button>
              </a>
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
  } else {
    return (
      <div className="relative">
        <img
          src="/banner.png"
          alt="banner"
          className="w-full h-40 object-cover object-center"
        />
        <div className="absolute top-28 ml-4 bg-black w-[8rem] h-[8rem] p-2 rounded-full flex items-center justify-center">
          <img
            src="/perfil.png"
            alt="banner"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <div className="flex items-center justify-center ml-10 mt-4 w-full">
          <div>
            <a href="https://discord.com/users/315543338109632512">
              <Button className={"w-full"}>Send Message</Button>
            </a>
            <div className="flex items-center justify-between mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/andrelemuel/"
              >
                <LinkedinIcon className={"w-4"} />
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/1UOaT7WGo5u-BXRcmQJSbPZW_65ma7JbP?usp=share_link"
              >
                <PortfolioIcon className={"w-4"} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/andre_leemuel/"
              >
                <InstaIcon className={"w-4"} />
              </a>
              <a target="_blank" href="https://t.me/lemuel_cm">
                <TelegramIcon className={"w-4"} />
              </a>
              <a target="_blank" href="https://twitter.com/0xLemuel">
                <TwitterIcon className={"w-4"} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex px-6">
          <div className="h-full w-full flex items-start pt-4">
            <div className="w-full">
              <Title>
                Lemuel<span className="text-brand-pink">#2000</span>
              </Title>
              <Text className={"text-[0.7rem] mt-1"}>
                Web3 Community Builder
              </Text>
              <Text className={"text-[0.5rem] mt-4"}>
                Community Manager <span className="text-brand-pink">|</span>{" "}
                Moderator <span className="text-brand-pink">|</span> Telegram
                Manager <span className="text-brand-pink">|</span> Discord
                Security Auditor & Expert.
              </Text>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
