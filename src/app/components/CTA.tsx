import React from "react";

export default function CTA() {
  return (
    <>
      <div className="flex items-center pt-[120px] pl-[280px] pr-[280px] flex-col pb-[120px] justify-center bg-[#ffffff]">
        <div className="flex items-center pl-[90px] pr-[90px] flex-col">
          <div className="flex items-center mb-[40px] flex-col">
            <div className="w-[fit-content] h-[fit-content] flex text-[80px] text-center font-semibold leading-[110%] mb-[24px] flex-row">
              Get Started Today
            </div>
            <div className="text-[#585860] w-[fit-content] h-[fit-content] flex text-[20px] text-center font-medium leading-[150%] flex-row">
              Streamline your global business and grow your team effortlessly.
            </div>
          </div>
          <button className="flex items-center pt-[22px] pl-[32px] rounded-[100px] pr-[32px] flex-row pb-[22px] justify-center bg-[#0a112f]">
            <div className="text-[#ffffff] w-[fit-content] h-[fit-content] flex text-[24px] text-left font-semibold leading-[150%] flex-row">
              Create Account
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
