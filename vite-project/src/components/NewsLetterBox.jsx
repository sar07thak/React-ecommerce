import React from 'react'

export const NewsLetterBox = () => {
    const handleformsubmit = (e) => {
        e.preventDEfault();
    }
  return (
    <div className='text-center  rounded-xl shadow-[#414141] shadow-2xl py-5 px-2'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, eaque!
        </p>
        <form onClick={handleformsubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" className='w-full sm:flex-1 outline-none' placeholder='enter your email' name="" id="" />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}
