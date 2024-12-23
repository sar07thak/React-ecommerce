import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import Typed from 'typed.js'

export const Herosection = () => {

  const typedElement = useRef(null);

  useEffect(()=>{

    var typedata = new Typed('.auto-type',{
      strings : [
        'latest arrivals',
        'Trending Now',
        'just Dropped',
      ],
      loop : true,
      typeSpeed : 150 ,
      backSpeed : 120 ,
      backDelay : 1000,    
    });

    const typed = new Typed(typedElement.current, typedata);

    return () => {
      typed.destroy();
    };


  },[]);


  return (
    <div className="flex flex-col sm:flex-row rounded-3xl shadow-2xl shadow-[#414141] ">
      
      <div className="w-full sm:w-1/2  rounded-tl-3xl flex flex-col items-center bg-[#FFB6AD] text-[#414141] justify-center py-10 sm:py-0  ">
        
          <div className="flex items-center gap-2 bg-[#FFB6AD] mb-3">
            <p className="w-8 md:w-11 h-[1px] bg-[#414141] "></p>
            <p className="font-semibold text-sm md:text-base bg-[#FFB6AD] ">
              OUR BESTSELLER
            </p>
          </div>
                      
          <div>
            <span ref={typedElement}  className="text-3xl sm:py-3 lg:text-5xl font-medium auto-type text-[#414141] bg-[#FFB6AD] ">
            </span>
          </div>
          
          <div className="flex  items-center gap-2 bg-[#FFB6AD] mt-3">
            <p className="font-semibold text-sm md:text-base bg-[#FFB6AD] ">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141] "></p>
          </div>
        
      </div>
      {/* hero right side */}

      <img
        src={assets.hero_img}
        alt=""
        className="w-full sm:w-1/2 rounded-br-3xl"
      />
    </div>
  );
};