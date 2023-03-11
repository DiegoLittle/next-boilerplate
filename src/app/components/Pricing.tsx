import React from 'react'
import PricingCard from './PricingCard'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <div
    id='pricing'
    >
        <Headline />
        <div
        className='flex flex-row justify-center space-x-12'
        >
            <PricingCard
            type='Free'
            dark={false}
             />
            <PricingCard
            type='Paid'
            dark={true}
             />
        </div>
    </div>
  )
}

export default Pricing

export function Headline() {
  return (
    <>
      <div className="flex items-center flex-col justify-center">
        <div className="w-[fit-content] h-[fit-content] flex text-[60px] text-center font-semibold leading-[110%] mb-[24px] flex-row">
          Pricing
        </div>
        <div className="text-[#585860] w-[fit-content] h-[fit-content] flex text-[24px] text-center font-medium leading-[140%] flex-row">
          Free Trial for 14 days. No credit card required. Or purchase lifetime for a one-time fee.
        </div>
      </div>
    </>
  );
}
