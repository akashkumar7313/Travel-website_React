import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white h-auto">
      <div className="p-5">
        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-20">
          <div className="mb-4 md:mb-0 md:ms-4 md:mx-10 lg:mx-20">
            <h2 className="md:text-[24px] lg:text-[30px] font-semibold">About Us</h2>
            <p className="md:text-sm lg:text-[16px]">
              Established in 2016, The Quick Cab <br /> is a Vadodara-based company. <br /> We provide budget-friendly and <br /> well-sanitized cab service in all <br /> major cities of India with experienced <br /> chauffeurs to ensure our clients have <br /> a safe and pleasant journey.
            </p>
          </div>
          <div className="mb-4 md:mb-0 flex-nowrap">
            <h2 className="md:text-[20px] lg:text-[28px] font-semibold">Quick Links</h2>
            <ul className="text-[16px]">
              <li><a href="/">Home</a></li>
              <li><a href="/">Book One Way</a></li>
              <li><a href="/">Our Network</a></li>
              <li><a href="/">Fare</a></li>
              <li><a href="/">Local Package</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 mr-10 mt-12">
            <ul className="text-[16px]">
            <li><a href="/">Why Us</a></li>
              <li><a href="/">Reviews</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Login</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="md:text-[20px] lg:text-[28px] font-semibold">Other Links</h2>
            <ul className="text-[16px]">
              <li><a href="/">Terms &amp; Conditions</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Request Invoice</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="md:text-[20px] lg:text-[28px] font-semibold">Contact Us</h2>
            <div className="mt-4 md:mt-0">
            <a href="tel:6356-544-544" className="text-[16px] font-semibold">+91 5597892463</a>
            <a href="mailto:info@thequickcab.com" className="block mt-1">support@gmail.in</a>
            <a href="mailto:info@thequickcab.com" className="block mt-1">Lucknow,Uttar Pradesh,208002</a>
          </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-600 my-4 mt-[100px]" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm">
            &copy; 2023 CRJ Software Technologies Pvt Ltd., All Rights Reserved. | Sitemap
          </p>
          <p className="text-sm">
            Website Design by CRJ
          </p>
          <div className="mt-4 md:mt-0">
            <a href="tel:6356-544-544" className="text-[16px] font-semibold">+91 5597892463</a>
            <a href="mailto:info@thequickcab.com" className="block mt-1">support@gmail.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
