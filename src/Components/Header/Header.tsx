import React from "react";
import { Title } from "../Title/Title";
import { Text } from "../Title/Text";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <>
      <img
        src="/banner.png"
        alt="banner"
        className="w-full h-[17rem] object-cover object-center"
      />
      <div className="absolute top-48 ml-4 bg-black w-80 h-80 rounded-full flex items-center justify-center">
        <img
          src="/perfil.png"
          alt="banner"
          className="w-[85%] h-[85%] object-cover object-center rounded-full self-center"
        />
      </div>

      <div className="w-full flex justify-end">
        <div className="w-[65%] h-full flex items-start pr-12 pt-12">
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
          </div>
        </div>
      </div>
    </>
  );
}
