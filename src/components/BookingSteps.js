import React from 'react';
import image1 from '../components/assests/service-1.png';
import image2 from '../components/assests/service-2.png';
import image3 from '../components/assests/service-3.png';

const BookingSteps = () => {
    return (
        <div className='md:h-[1150px] lg:h-[720px] w-full bg-slate-100'>
            <div className='mt-16 lg:mt-24'>
                <h1 className='text-4xl font-extrabold py-8 pt-14 flex justify-center text-center'>
                    Now, Book Your Car In 3 Easy Steps
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-20 md:gap-10 md:pl-5 md:pr-5 lg:gap-16 ">
                <div className='flex-col h-[420px] rounded-[10px] shadow-lg w-[90%] md:w-[380px] border-b-4 border-yellow-500 bg-white overflow-hidden first-letter:'>
                    <div className='flex justify-center mt-10'>
                        <img src={image1} alt='StoreImage' className='md:bg-no-repeat md:bg-center rounded-tl-[10px] rounded-tr-[10px] lg:bg-cover lg:bg-center transition-transform duration-300 transform hover:scale-110' />
                    </div>
                    <div className='mx-2 md:mx-6 mt-10 mb-4'>
                        <h1 className='text-[28px] font-bold text-center'>Pay and Book</h1>
                        <div className='text-gray-600 text-[14px] mt-3 text-center'>
                            <p className='flex gap-[2px] text-xl'> Fill in your details like address, phone number, pay the required travel charges, and book your taxi today</p>
                        </div>
                    </div>
                </div>

                <div className='flex-col h-[420px] rounded-[10px] shadow-lg w-[90%] md:w-[380px] bg-white overflow-hidden border-b-4 border-yellow-500'>
                    <div className='flex justify-center mt-10'>
                        <img src={image2} alt='StoreImage' className='md:bg-no-repeat md:bg-center rounded-tl-[10px] rounded-tr-[10px] lg:bg-cover lg:bg-center transition-transform duration-300 transform hover:scale-110' />
                    </div>
                    <div className='mx-2 md:mx-6 mt-10 mb-4'>
                        <h1 className='text-[28px] font-bold text-center'>Select Car of Your Choice</h1>
                        <div className='text-gray-600 text-[14px] mt-3 text-center'>
                            <p className='flex gap-[2px] text-xl'>We have a wide range of cars – from hatchbacks to sedans to luxury SUVs. Select the car of your choice</p>
                        </div>
                    </div>
                </div>

                <div className='md:mb-0 flex-col h-[420px] mb-10  rounded-[10px] shadow-lg w-[90%] md:w-[380px] bg-white overflow-hidden border-b-4 border-yellow-500'>
                    <div className='flex justify-center mt-10'>
                        <img src={image3} alt='StoreImage' className='md:bg-no-repeat md:bg-center rounded-tl-[10px] rounded-tr-[10px] lg:bg-cover lg:bg-center transition-transform duration-300 transform hover:scale-110' />
                    </div>
                    <div className='mx-2 md:mx-6 mt-10 mb-4'>
                        <h1 className='text-[28px] font-bold text-center'>Pay and Book</h1>
                        <div className='text-gray-600 text-[14px] mt-3 text-center'>
                            <p className='flex gap-[2px] text-xl'> Fill in your details like address, phone number, pay the required travel charges, and book your taxi today</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookingSteps;
