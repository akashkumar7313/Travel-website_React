import React from 'react';
import banner from '../components/assests/banner.jpg';

export default function Banner() {
  return (
    <div className='h-[500px] w-[100%] relative'>
      {/* Background color with opacity */}
      <div className="absolute inset-0 bg-blue-700 opacity-50"></div>
      <img src={banner} alt="" className="h-[500px] w-[100%]" />
      <div className="absolute top-0 left-0 w-full h-full flex mt-8 justify-center">
        <h1 className="md:text-5xl lg:text-6xl sm:text-[34px] font-extrabold text-white text-center">
          Book Your Quick Cab Service <br /> <span>& Save Up To 20% On Your Travel Expenses</span>
        </h1>
      </div>
      {/* Button */}
      <button className='absolute sm:bottom-[250px] md:bottom-[250px] lg:bottom-[260px] left-1/2 transform -translate-x-1/2 px-10 rounded py-4  bg-yellow-500 text-black font-semibold shadow-lg'>
        BOOK NOW
      </button>
    </div>
  );
}
