import React from 'react'
import image from '../components/assests/cab.png'

export default function Feq() {
    return (
        <div className='mt-20 h-auto w-100%'>
            <div>
                <h2 className='flex justify-center text-[18px] font-bold text-yellow-500'>WHY CHOOSE US</h2>
                <h2 className="mt-4 text-4xl font-extrabold text-black text-center">
                    We Provide The Best Affordable <br />
                    <span className="block">Cab Services</span>
                </h2>
            </div>
            <div className='lg:flex justify-evenly mt-16'>
            <div className='md:flex md:justify-center'>
                <img src={image} alt=""  className='md:mt-0 lg:mt-[100px] sm:ml-8 lg:mx-24'/>
            </div>
            <div className='sm:mx-14 md:mx-[80px] md:mt-16 lg:mt-0'>
                <h2 className='text-2xl font-bold'>1. Thought Taxi Trips Are Expensive?</h2>
                <p className='text-[18px]'>It is savings all the way for your taxi ride/trip. We are very pocket <br /> friendly, irrespective of one way, local, round trip or special package <br /> cab trip. Save up to 50% for your cab trip.</p>
                <h2 className='text-2xl font-bold mt-4'>2. Your Safety and Comfort Is Our Priority.</h2>
                <p className='text-[18px]'>Safety first. Followed closely by comfort. At Quick Cab, we ensure both <br />go hand-in-hand. As sanitization becomes the new normal in COVID times, <br /> we ensure all our cabs are clean and well-sanitized before they are arrive <br /> to pick you up from your pick-up point. Not just that, all our <br /> 4-wheelers are air-conditioned to ensure maximum comfort.</p>
                <h2 className='text-2xl font-bold mt-4'>3. No More Two-Way Fare for a One-Way Taxi Trip.</h2>
                <p className='text-[18px]'>Have you been paying a two-way fare for your one-way trip? With us you <br /> don’t have to do that. When we say one-way trip, it means the taxi fare <br /> is one-way too.</p>
                <h2 className='text-2xl font-bold mt-4'>4. Experienced Cab Drivers to Ensure a Good Trip <br /> Experience.</h2>
                <p className='text-[18px]'>A good trip no matter where you go – local, outstation or roundabout,<br /> rests highly on how comfortable the ride is and experience drivers are a <br /> part and parcel of that. At Quick Cab, all of drivers are experienced <br /> to ensure the right riding experience for you.</p>
            </div>
            </div>
        </div>
    )
}
