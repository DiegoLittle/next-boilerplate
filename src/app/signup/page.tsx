"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      console.log('passwords do not match');
      return;
    }
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log('res:', res.status)
    if(res.status === 200){
      const data = await res.json();
      console.log('data:', data);
      await signIn("email-login", {
        email,
        password,
        redirect: true,
        callbackUrl: '/dashboard'
    });
    }else if (res.status === 409){
      await signIn("email-login", {
        email,
        password,
        redirect: true,
        callbackUrl: '/dashboard'
        })
      setErrors({
        email: 'Email already exists',
        password: '',
        confirmPassword: '',
      });
    }
    

  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className={`border-[1.0px] max-w-[600px] mt-8 rounded-lg w-fit border-[#e4e4e7] flex flex-col items-center pt-[48px] px-[48px] pb-[48px] justify-center`}>
        <Text />
        <div className="w-[100%] flex flex-col items-center justify-center">
          <form className="w-[100%] space-y-[20px]" onSubmit={handleSubmit}>
            <div className="w-[100%] flex flex-col space-y-[8px]">
              <label htmlFor="email" className={`text-[#0a112f] text-sm font-semibold`}>
                Email
              </label>
              <div className="flex items-center relative border-[1px] border-[#e4e4e7] bg-transparent rounded-lg">
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
            <div className="w-[100%] flex flex-col space-y-[8px]">
              <label htmlFor="confirmPassword" className={`text-[#0a112f] text-sm font-semibold`}>
                Confirm Password
              </label>
              <div className="flex items-center border-[1px] relative border-[#e4e4e7] bg-transparent rounded-lg">
                <FaLock className=" text-[#585860] absolute left-2" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="w-full bg-transparent pl-8 text-[#585860] py-[12px] px-[16px] outline-none focus:border-blue-500 focus:shadow"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-[16px] px-[32px] rounded-md bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;

function Text() {
  return (
    <>
      <div className="flex items-center flex-col justify-start mb-6">
        <div className="w-[fit-content] h-[fit-content] flex text-[40px] text-left font-semibold leading-[110%] mb-[10px] flex-row">
          Sign Up for Free
        </div>
        <div className="text-[#585860] w-[fit-content] h-[fit-content] flex text-[20px] text-left font-medium leading-[150%] flex-row">
          Create your Effectis account to get started
        </div>
        <div className="text-[#585860] w-[fit-content] h-[fit-content] flex text-[14px] text-left font-medium leading-[150%] flex-row">
          Already have an account?&nbsp; <Link
            href="/signin"
            className="text-[#585860] text-primary w-[fit-content] h-[fit-content] flex text-[14px] text-left font-medium leading-[150%] flex-row"
          >Sign In
          </Link>
          </div>
      </div>
    </>
  );
}