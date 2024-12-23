import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import Typed from 'typed.js'

export const Herosection = () => {

  const typedElement = useRef(null);

  useEffect(()=>{

    var typedata = new Typed('.auto-type',{
      strings : [
        'latest arrivals..',
        'Trending Now..',
        'just Dropped..',
      ],
      loop : true,
      typeSpeed : 100 ,
      backDelay : 2000,    
      backSpeed : 80 ,
    });

    const typed = new Typed(typedElement.current, typedata);

    return () => {
      typed.destroy();
    };


  },[]);


  return (
    <div className="flex flex-col sm:flex-row rounded-3xl bg-[#FFEDEB] shadow-2xl shadow-[#414141] ">
      
      <div className="w-full sm:w-1/2  rounded-tl-3xl flex items-center justify-center py-10 sm:py-0 bg-[#FFB6AD] ">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2 bg-[#FFB6AD] ">
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            <p className="font-semibold text-sm md:text-base bg-[#FFB6AD]  ">
              OUR BESTSELLER
            </p>
          </div>
       
                      
          <div className=" bg-[#FFB6AD] ">
            <span ref={typedElement}  className="text-3xl sm:py-3 lg:text-5xl font-medium auto-type text-[#414141] bg-transparent ">
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#FFB6AD] pt-3">
            <p className="font-semibold text-sm md:text-base bg-[#FFB6AD] ">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141] "></p>
          </div>
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


          {/* <div className=" bg-[#FFB6AD]">
            <span className="auto-type text-3xl sm:py-3 lg:text-5xl leading-relaxed font-normal text-[#414141] bg-[#FFB6AD]"></span>
          </div> */}

             {/* <span class="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-normal text-[#414141] bg-[#FFB6AD] "> */}