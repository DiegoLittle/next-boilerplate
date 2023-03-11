import React from "react";
import MoneyIcon from "@icons/MoneyIcon";
import Earth2Icon from "@icons/Earth2Icon";
import UserIcon from "@icons/UserIcon";

export default function Statistics() {
  return (
    <>
              <div
              id="features"
               className="flex items-center pt-[120px] pl-[200px] pr-[200px] flex-col pb-[120px] justify-center bg-[#ffffff]">
              <div className="flex items-center pt-[48px] pl-[48px] rounded-[24px] pr-[48px] flex-col pb-[48px] justify-center bg-[#0a112f]">
        <div className="text-[#ffffff] w-[fit-content] h-[fit-content] flex text-[24px] text-center font-normal leading-[160%] mb-[32px] flex-row">
          Our Core Features
        </div>
        <div className="flex flex-row space-x-8">
          <Card 
          title="Upload LinkedIn Profiles"
          description="Upload your LinkedIn profiles and we'll do the rest."
          icon={<UserIcon></UserIcon>}
          ></Card>
          <Card 
          title="AI Outreach Messages"
          description="Send personalized messages to your leads and candidates."
          icon={<MoneyIcon></MoneyIcon>}
          ></Card>
          <Card 
          title="Multi-Lingual Support"
          description="Support your leads and candidates in their native language."
          icon={<Earth2Icon></Earth2Icon>}
          />

          
        </div>
      </div>
          </div>
      
    </>
  );
}


export function Card({
  title,
  description,
  icon,
}){
  return(
    
  <div className=" flex  h-full min-h-[200px] pt-[24px] pl-[24px] rounded-[24px] pr-[43px] flex-row pb-[24px] bg-[#ffffff] bg-opacity-[10%]">
  <div className="flex flex-row">
    <div className="w-[56px] h-[56px] flex flex-row">
      {icon}
    </div>
  </div>
  <div className="flex ml-[24px] flex-col">
    <div className="text-[#ffffff] w-[fit-content] h-[fit-content] flex text-[24px] text-left font-semibold leading-[150%] mb-[0px] flex-row">
      {title}
    </div>
    <div className="text-[#9096a2] w-[fit-content] h-[fit-content] flex text-[18px] font-medium leading-[145%] flex-row">
      {description}
    </div>
  </div>
</div>
)
}