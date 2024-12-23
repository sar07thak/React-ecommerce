import React, { useEffect } from "react";
import { assets } from "../assets/assets";

export const Herosection = () => {
  return (
    <div className="flex flex-col sm:flex-row rounded-3xl bg-[#FFEDEB] shadow-2xl shadow-[#414141] ">
      {/* hero left side */}
      <div className="w-full sm:w-1/2  rounded-l-3xl flex items-center justify-center py-10 sm:py-0 bg-[#FFB6AD]">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2 bg-[#FFB6AD] ">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-semibold text-sm md:text-base bg-[#FFB6AD] ">
              OUR BESTSELLER
            </p>
          </div>
          <div className="typewriter bg-[#FFB6AD] ">
            <span class="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-normal text-[#414141] bg-[#FFB6AD]  text">
              LATEST ARRIVALS!
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#FFB6AD]">
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
        className="w-full sm:w-1/2 rounded-r-3xl"
      />
    </div>
  );
};
