import React from 'react'
import { assets } from '../assets/assets'

export const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2  text-clip py-20 text-sm sm:text-base text-gray-700   '>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' srcset="" />
            <p className='font-semibold '>Easy Exchange Policy</p>
            <p className='text-gray-400'>NO offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' srcset="" />
            <p className='font-semibold '>7 Days Return Policy</p>
            <p className='text-gray-400'>WE Provide 7 days free return policy </p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' srcset="" />
            <p className='font-semibold '>Best customer Service</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>
    </div>
  )
}
