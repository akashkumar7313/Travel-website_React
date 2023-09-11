import React from 'react'
import image from '../components/assests/ThanitJuly_53.jpg'

export default function NextTrip() {
  return (
    <div className='sm:mt-0 mt-20 h-auto w-100% sm:p-10'>
      <div className='lg:flex justify-evenly mt-16'>
        <div className=''>
          <h2 className='flex justify-center text-[18px] font-bold text-yellow-500'>WHO WE ARE</h2>
          <h2 className="mt-4 text-4xl font-extrabold text-black text-center">
            Book Your Next Trip <br />
            <span className="block">With Us</span>
          </h2>
          <p className='text-[18px] mb-14 lg:mb-[100px] mt-14 md:mx-24 lg:mx-5 '>We are a Vadodara-based cab/taxi service company. We have been providing efficient and <br /> budget-friendly cab/taxi services across the length and breadth of Gujarat from the time we <br /> founded The Quick Cab in 2016. Having said that, we all provide taxi services to select cities <br /> across the country. We cover all important routes, including Vadodara to Ahmedabad, Surat, <br /> Rajkot, etc.
            We are a 24X7 cab service so you can book your taxi with us anytime. <br /> Made an impromptu travel plan and need a cab? <br /> Just log in and book a taxi and we will be there to pick you up. <br /> You are just one click away to book your ride with us.</p>
        </div>
        <div className='md:flex justify-evenly'>
          <img src={image} alt="" className=' rounded-xl w-[450px] mb-16 sm:mx-24 ' />
        </div>
      </div>
    </div>
  )
}
