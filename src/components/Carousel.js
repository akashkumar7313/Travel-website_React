import React from 'react';
import image from '../components/assests/1 (1).png';
import image1 from '../components/assests/1 (3).png';
import image2 from '../components/assests/1 (1).png';

export default function Carousel() {
  return (
    <div className='flex flex-col sm:flex-row md:flex-row sm:items-center justify-center gap-5 p-5 md:gap-10 '>
      <div className='md:mt-5 lg:mt-10 drop-shadow-lg'>
        <img src={image} alt="" className='md:h-40 lg:h-[400px] w-[500px]  shadow-lg' />
      </div>
      <div className='md:mt-5 lg:mt-10 drop-shadow-lg'>
        <img src={image1} alt="" className='md:h-40 lg:h-[400px] w-[500px]  shadow-md' />
      </div>
      <div className='md:mt-5 lg:mt-10 drop-shadow-lg'>
        <img src={image2} alt="" className='md:h-40 lg:h-[400px] w-[500px] shadow-md' />
      </div>
    </div>

  );
}
