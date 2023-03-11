"use client"
import {useSession} from 'next-auth/react'

type Props = {}

const Dashboard = (props: Props) => {
    const {data:session, error:sessionError} = useSession()
  return (
    <div>
        <div className="flex flex-col items-center justify-center">
            <div className="w-[fit-content] h-[fit-content] flex text-[60px] text-center font-semibold leading-[110%] mb-[24px] flex-row">
                Dashboard
                </div>

            <div className="text-[#585860] w-[fit-content] h-[fit-content] flex text-[24px] text-center font-medium leading-[140%] flex-row">
                {session?.user?.email}
                </div>
                </div>
    </div>
  )
}

export default Dashboard