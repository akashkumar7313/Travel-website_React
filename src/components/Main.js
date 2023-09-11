import React from 'react';
import image from '../components/assests/892-8922692_book-taxi-now-cab-service.png';

export default function Main() {
  return (
    <div className='lg:flex justify-center mt-2 sm:mt-10 md:mt-14 lg:mt-16'>
  <div className='h-auto md:mx-4 lg:mx-0 md:w-[80%] lg:w-[45%] bg-slate-300 flex mt-4 lg:mt-0 drop-shadow-lg'>
    <img src={image} alt="" />
  </div>
  <div className='md:w-[80%] lg:w-[40%] md:mx-4 lg:mx-0 h-auto bg-white mt-4 lg:mt-0 drop-shadow-lg'>
    <div className='mx-4 sm:pt-8 sm:pb-8 pb-6 pt-6 md:pt-8 md:pb-8'>
      <h1 className='text-4xl font-extrabold'>Book Taxi Online</h1>
      <div className='flex flex-wrap gap-3 mt-6 text-sm'>
        <button className='px-3 rounded-md py-2 bg-yellow-400 text-black font-semibold shadow-lg'>One Way Taxi</button>
        <button className='px-4 rounded-md py-3 bg-yellow-400 text-black font-semibold shadow-lg'>Out-Station Trips</button>
        <button className='px-4 rounded-md py-3 bg-yellow-400 text-black font-semibold shadow-lg'>Local Trips</button>
        <button className='px-4 rounded-md py-3 bg-yellow-400 text-black font-semibold shadow-lg'>Local KM</button>
      </div>
      <div className="flex flex-wrap items-center py-2 gap-3 mt-4">
        <input className="appearance-none bg-transparent border-b border-teal-500 w-full sm:w-[300px] text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter and Select Pick-up City" aria-label="Full name" />
        <input className="appearance-none bg-transparent border-b border-teal-500 w-full sm:w-[300px] text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter and Select Visiting City" aria-label="Full name" />
      </div>
      <div className='mt-4'>
        <input className="appearance-none bg-transparent border-b border-teal-500 w-full sm:w-[300px] text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Full name" />
      </div>
      <button className='px-8 rounded-md py-3 mt-4 lg:mt-8 bg-black text-white font-semibold shadow-lg'>BOOK NOW</button>
    </div>
  </div>
</div>

  );
}
