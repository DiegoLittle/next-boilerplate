import React from "react";
import Icon2 from "@icons/Icon2";

export default function TopNav() {
  return (
    <>
      <div className="flex items-center pt-[24px] pl-[80px] pr-[80px] flex-row pb-[24px] justify-between w-full ">
        <div className="flex items-center pr-[21px] flex-row">
          <div
            className="flex"
          >
            <svg height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_10_10446" maskUnits="userSpaceOnUse" x="0" y="8" width="24" height="24">
                <circle cx="12" cy="20" r="12" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0_10_10446)">
                <circle cx="6.29204" cy="5.86896" r="9.9559" transform="rotate(-22 6.29204 5.86896)" fill="#0A112F" />
                <circle cx="17.711" cy="34.1308" r="9.9559" transform="rotate(-22 17.711 34.1308)" fill="#0A112F" />
                <circle cx="-2.12886" cy="25.7093" r="9.9559" transform="rotate(-22 -2.12886 25.7093)" fill="#0A112F" />
                <circle cx="25.8707" cy="13.6435" r="9.9559" transform="rotate(-22 25.8707 13.6435)" fill="#0A112F" />
              </g>
            </svg>
            <span
              className="text-[24px] leading-[40px] text-[#0A112F] "
            >
              Effectis
            </span>
          </div>

        </div>
        <div className="flex items-center flex-row">

          <NavLink
            url="#features"
          >
            Features
          </NavLink>
          <NavLink
            url="#pricing"
          >
            Pricing
          </NavLink>

        </div>
        <a
          href="/signin"
          className="flex items-center flex-row justify-flex-end">
          <button className="w-[100%] h-[100%] flex items-center flex-row justify-flex-end">
            {/* <button className="h-[100%] flex items-center pt-[11px] mr-[0px] pl-[24px] rounded-[100px] pr-[24px] flex-row pb-[11px] justify-center">
              <div className="text-[#a112f] w-[fit-content] h-[fit-content] flex text-[18px] text-left font-semibold leading-[145%] flex-row">
                
              </div>
            </button> */}
            <button className="h-[100%] flex items-center pt-[11px] pl-[24px] rounded-[100px] pr-[24px] flex-row pb-[11px] justify-center bg-[#f4f4f5]">
              <div className="text-[#a112f] w-[fit-content] h-[fit-content] flex text-[18px] text-left font-semibold leading-[145%] flex-row">
                Sign In
              </div>
            </button>
          </button>
        </a>
      </div>
    </>
  );
}


export function NavLink({
  children,
  url
}) {

  return (
    <a
      href={url}
      className="h-[100%] flex items-center mr-[48px] flex-row">
      <div className="text-[#a112f] w-[fit-content] h-[fit-content] flex text-[18px] text-left font-semibold leading-[160%] mr-[8px] flex-row">
        {children}
      </div>
    </a>
  )
}