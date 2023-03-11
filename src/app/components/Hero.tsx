import React from "react";
import Icon from "@/app/components/icons/GlobeIcon";

export default function Hero() {
  return (
    <>
      <div className="flex items-center pt-[88px] pl-[245px] pr-[245px] flex-col pb-[88px] justify-center bg-[#ffffff]">
        <div className="flex items-center mb-[40px] flex-col">
          <div className="w-[fit-content] h-[fit-content] flex text-[80px] text-center font-semibold leading-[110px] mb-[24px] flex-col">
            AI Outreach <br/> Platform made for <span className="text-primary">
              LinkedIn Profiles
            </span>
          </div>
          <div className="text-[#a112f] w-[fit-content] h-[fit-content] flex text-[24px] text-center font-medium leading-[140%] flex-row">
            Easily generate personalized lines to send to your prospects
          </div>
        </div>
        <div className="flex items-center flex-col">
          <button className="flex items-center pt-[22px] pl-[32px] rounded-[100px] mb-[32px] pr-[32px] flex-row pb-[22px] justify-center bg-[#0A112F]">
            <div className="text-[#ffffff] w-[fit-content] h-[fit-content] flex text-[24px] text-left font-semibold leading-[150%] flex-row">
              Learn More
            </div>
          </button>
          <div className="w-[100%] flex items-center flex-row justify-flex-end">
            <div className="w-[fit-content] h-[fit-content] flex text-[18px] text-left z-Symbol(figma.mixed) leading-[160%] mr-[8px] flex-row">
              Available in 10+ languages
            </div>
            <Icon></Icon>
          </div>
        </div>
      </div>
    </>
  );
}
