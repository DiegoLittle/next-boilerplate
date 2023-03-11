import React from "react"
import CubeIcon from "@icons/CubeIcon"
import Icon3 from "@icons/Icon3"
import CheckIcon from "./icons/CheckIcon"

export default function PricingCard({
  dark = false,
  type = "Free",
}) {
  return (
    <>
      <div className={`border-[1.0px] max-w-[400px] mt-8 rounded-lg w-fit border-[#e4e4e7] flex items-center pt-[48px] pl-[48px] pr-[48px] flex-col pb-[48px] justify-center ${dark ? 'bg-[#0A112F]': 'bg-[#ffffff]'} `}>
        <div className="flex mb-[40px] flex-col">
          <div className="w-[100%] flex mb-[32px] flex-col">
            {/* <div className="w-[100%] flex mb-[24px] flex-col">
              <div className="w-[24px] h-[24px] flex mb-[32px] flex-row">
                <div className="w-[24px] h-[24px] flex flex-row">
                  <CubeIcon></CubeIcon>
                </div>
              </div>
              <div className="border-[0.0px] border-[#979797] flex items-center pt-[16px]  rounded-[40px] flex-row pb-[16px] justify-center bg-[#f0f6fe]">
                <div className="text-[#3981f7] w-[fit-content] h-[fit-content] flex text-[16px] text-center font-semibold leading-[150%] flex-row">
                  Contractor Management
                </div>
              </div>
            </div> */}
            <div className="w-[100%] flex  flex-col">
              <div className={`${dark ? 'text-white': 'text-[#0a112f]'} w-[fit-content] h-[fit-content] flex text-[48px] text-left font-semibold leading-[120%] mb-[16px] flex-row`}>
                {type === "Free" ? "Free" : "59$"}
              </div>
              <div className={`${dark ? 'text-white' : 'text-[#585860]'} w-[fit-content] h-[fit-content] flex text-[16px] text-left font-medium leading-[160%] mb-[16px] flex-row`}>
                {type === "Free" ? "200 Free Credits" : "Unlimited Outreach Generation"}
              </div>
              <div className="text-[#3981f7] w-[fit-content] h-[fit-content] flex text-[16px] text-left font-normal leading-[160%] flex-row">
                *No commitments. Cancel anytime.
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-col">
            <FeatureText 
            dark={dark}
            text={type === "Free" ? "200 Free Credits" : "Unlimited Outreach Generation"} />
            <FeatureText 
            dark={dark}
            text="Multiple Languages Support" />
            <FeatureText 
            dark={dark}
            text="Upload CSVs" 
            />
            <FeatureText 
            dark={dark}
            text="View Outreach History"
             />
          </div>
        </div>
        <button className="flex items-center pt-[22px] w-full rounded-[100px] flex-row pb-[22px] justify-center bg-[#fafafa]">
          <div className="text-[#0a112f] w-[fit-content] h-[fit-content] flex text-[24px] text-left font-semibold leading-[150%] flex-row">
            Get Started
          </div>
        </button>
      </div>
    </>
  )
}


function FeatureText({
  text,
  dark
}){
  return (
    <div className="w-[100%] flex mb-[16px] flex-row">
    <div className={`flex items-center pt-[8px] mr-[12px] pl-[8px] rounded-[40px] pr-[8px] flex-col pb-[8px] bg-[#f5f9ff]`}>
      <CheckIcon></CheckIcon>
    </div>
    <div className={`${dark ? 'text-white' : 'text-[#585860]'} w-[fit-content] h-[fit-content] flex text-[15px] text-left font-normal leading-[160%] tracking-wide flex-row`}>
      {text}
    </div>
  </div>
  )
}