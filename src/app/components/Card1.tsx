import React from "react";
import Group14226Icon from "@icons/Group14226Icon";

export default function Card1() {
  return (
    <>
      <div className="border-[1px] border-[#e7eaee] flex items-center pt-[24px] pl-[24px] rounded-[16px] pr-[24px] flex-col pb-[24px] justify-center bg-[#ffffff]">
        <div className="flex mb-[16px] flex-row">
          <div className="w-[100%] h-[100%] flex flex-col">
            <div className="h-[100%] flex flex-row"></div>
            <Group14226Icon></Group14226Icon>
            <div className="flex items-center ml-[8px] mb-[8px] flex-row justify-between">
              <div className="text-[#0a112f] w-[fit-content] h-[fit-content] flex text-[16px] text-left font-normal leading-[150%] mr-[133px] flex-row">
                Upcoming Payroll
              </div>
              <div className="text-[#3981f7] w-[fit-content] h-[fit-content] flex text-[16px] text-left font-normal leading-[150%] flex-row">
                April 1, 2022
              </div>
            </div>
            <div className="flex items-center ml-[16px] flex-row">
              <div>$2,670.50</div>
              <div className="flex items-center ml-[16px] pt-[4px] pl-[12px] rounded-[100px] pr-[12px] flex-row pb-[4px] bg-[#fef6eb]">
                <div
                  xmlns="http://www.w3.org/2000/svg"
                  height="6"
                  viewBox="0 0 6 6"
                  className="fill-[black] w-[6px] h-[6px] flex flex-row bg-[#faa745]"
                >
                  <circle r="3" cx="3" cy="3" fill="#FAA745"></circle>
                </div>
                <div className="text-[#faa745] w-[fit-content] h-[fit-content] flex text-[14px] text-left font-semibold leading-[140%] ml-[8px] flex-row">
                  Pending
                </div>
              </div>
            </div>
            <div className="hidden mt-[8px] items-center ml-[166px] pt-[10px] pl-[16px] rounded-[100px] pr-[15px] flex-row pb-[10px] justify-center bg-[#3981f7]">
              <div className="text-[#ffffff] w-[fit-content] h-[fit-content] flex text-[14px] text-center font-normal leading-[140%] flex-row">
                Withdraw
              </div>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-[#e7eaee] flex pt-[16px] pl-[16px] pr-[16px] flex-row pb-[16px]">
          <div className="flex flex-col">
            <div className="text-[#0a112f] w-[fit-content] h-[fit-content] flex text-[16px] text-left font-normal leading-[150%] mb-[8px] flex-row">
              Client
            </div>
            <div className="w-[100%] flex items-center flex-row justify-between">
              <div className="h-[100%] flex mr-[13px] flex-row">
                <div className="h-[100%] flex mr-[16px] flex-row">
                  <div
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 48 48"
                    className="fill-[black] w-[100%] h-[100%] flex flex-row bg-[#ebf3fe]"
                  >
                    <circle r="24" cx="24" cy="24" fill="#EBF3FE"></circle>
                  </div>
                  <img
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34d20f31-22c8-4c9e-9628-ea4c07f8387f"
                    className="w-[32px] h-[32px] flex flex-row"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-[#15191e] w-[fit-content] h-[fit-content] flex text-[16px] text-left font-normal leading-[150%] mb-[0px] flex-row">
                    Adam Kovalenko
                  </div>
                  <div className="text-[#15191e] w-[fit-content] h-[fit-content] flex text-[14px] text-left font-normal leading-[140%] flex-row">
                    BlueLabs
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-[10px] pl-[16px] rounded-[100px] pr-[16px] flex-row pb-[10px] bg-[#0a112f]">
                <div className="text-[#ffffff] w-[fit-content] h-[fit-content] flex text-[14px] text-left font-normal leading-[140%] flex-row">
                  Send Invoice
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
