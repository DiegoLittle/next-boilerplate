"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("email-login", {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard'
    });
  };

  return (
    <div
    className='w-full h-screen flex flex-col items-center justify-center'
    >
            <div className={`border-[1.0px] max-w-[600px] mt-8 rounded-lg w-fit border-[#e4e4e7] flex flex-col items-center pt-[48px] px-[48px] pb-[48px] justify-center`}>
            <Text />
      <div className="w-[100%] flex flex-col items-center justify-center">
       
        <form className="w-[100%] space-y-[20px]" onSubmit={handleSubmit}>
          <div className="w-[100%] flex flex-col space-y-[8px]">
            <label htmlFor="email" className={`text-[#0a112f] text-sm font-semibold`}>
              Email
            </label>
            <div className="flex items-center border-[1px] relative border-[#e4e4e7] bg-transparent rounded-lg">
              <FaUser className=" text-[#585860] absolute left-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-transparent pl-8 text-[#585860] py-[12px] px-[16px] outline-none focus:border-blue-500 focus:shadow"
              />
            </div>
          </div>
          <div className="w-[100%] flex flex-col space-y-[8px]">
            <label htmlFor="password" className={`text-[#0a112f] text-sm font-semibold`}>
              Password
            </label>
            <div className="flex items-center border-[1px] relative border-[#e4e4e7] bg-transparent rounded-lg">
              <FaLock className=" text-[#585860] absolute left-2" />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full bg-transparent pl-8 text-[#585860] py-[12px] px-[16px] outline-none focus:border-blue-500 focus:shadow"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-[16px] px-[32px] rounded-md bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center"
          >
            Log In
          </button>
          {/* <div className="w-[100%] flex items-center justify-center space-x-[8px]">
            <input
              type="checkbox"
              id="remember_me"
              name="remember_me"
              className="rounded-full border-[1px] border-[#e4e4e7] bg-transparent text-blue-500 px-[2px]"
            />
            <label htmlFor="remember_me" className={`text-[#0a112f] font-normal text-sm`}>
              Remember Me
            </label>
          </div> */}
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;



function Text() {
  return (
    <>
      <div className="flex items-center flex-col justify-start">
        <div className="w-[fit-content] h-[fit-content] flex text-[40px] text-left font-semibold leading-[110%] mb-[24px] flex-row">
          Sign In
        </div>
        <div className="text-[#585860] w-[fit-content] h-[fit-content] flex text-[20px] text-left font-medium leading-[150%] flex-row">
          Welcome back, please login to your account
        </div>
        {/* Dont have an account */}
        <div className="text-[#585860] w-[fit-content] h-[fit-content] flex text-[14px] text-left font-medium leading-[150%] flex-row">
          Don't have an account?&nbsp; <Link
            href="/signup"
            className="text-[#585860] text-primary w-[fit-content] h-[fit-content] flex text-[14px] text-left font-medium leading-[150%] flex-row"
          >Sign Up
          </Link>
          </div>
      </div>
    </>
  );
}
