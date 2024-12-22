import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <>
    {/* <h1 className='bg-blue-500'>Footer</h1> */}
    <div className='  flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm'>
      <div >
        <img src={assets.logo} alt="" className='mb-5 w-32' />
        <p className='w-full md:w-2/3 text-gray-600 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at, omnis reprehenderit dignissimos possimus necessitatibus officiis magni. Molestiae vero voluptatum vitae in est, quibusdam sed natus unde tenetur quisquam nam.
        </p>
      </div>

      <div >
        <p className='text-xl font-medium mb-5'>
          COMPANY
        </p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About-us</li>
          <li>Delivery</li>
          <li>Privacy-policy</li>
        </ul>
      </div>

      <div >
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+1-222-777-099</li>
        <li>youngForever@gmail.com</li>

        </ul>
      </div>

    </div>
      <div className=''>
        <p className='py-5 text-sm text-center border-t-2 border-gray-400 '>
          CopyRight 2024 Forever.com-All rights reserved.
        </p>
      </div>
    </>
  )
}
