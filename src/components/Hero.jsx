import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10">
        <div className="text-[#414141] px-4">
          <div className="flex items-center gap-2 mb-3">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BEST</p>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            PREMIUM COLLECTIONS <br /> FOR THIS SEASON
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
