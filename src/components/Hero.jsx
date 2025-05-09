import React, { useEffect, useRef, useState } from 'react';
import HeroImage1 from '../assets/heroImages/heroImage1.svg';
import HeroImage2 from '../assets/heroImages/heroImage2.svg';
import HeroImage3 from '../assets/heroImages/heroImage3.svg';
import RightArrow from '../assets/rightArrow.svg';
import CircularIcon1 from '../assets/heroImages/circularIcon1.svg';
import CircularIcon2 from '../assets/heroImages/circularIcon2.svg';

const Hero = () => {
  const heroImages = [HeroImage1, HeroImage2, HeroImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 1500);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  return (
    <div className="flex xl:items-start lg:items-start md:items-start sm:items-start max-sm:flex-col justify-evenly w-full xl:py-20 xl:pr-10 xl:pl-10 lg:pt-20 md:pt-20 sm:pt-20 max-sm:pt-20 gap-10 bg-white">
      <div className="flex flex-col w-1/2 max-sm:w-full gap-6">
        <div className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-semibold xl:pr-20 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 max-sm:pl-8">
          Accurate Takeoffs for Landscaping, Snow, and Paving Teams - Faster Bids, Smarter Jobs
        </div>
        <div className="font-medium text-2xl xl:pl-10 xl:pr-20 lg:pl-10 md:pl-10 sm:pl-10 max-sm:pl-10 max-sm:px-5">
          Generate precise site maps and area takeoffs in minutes no manual Measurements, no guesswork. Just faster proposals and better margins.
        </div>
        <div className="pt-2 xl:pr-28 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 max-sm:pl-10 flex gap-4">
          <button className="bg-[#218448] cursor-pointer rounded-full text-white px-4 py-3 flex justify-center items-center gap-1">
            Try for Free
            <img src={RightArrow} alt="right arrow" />
          </button>
          <button className="border-[#218448] border-2 cursor-pointer rounded-full text-black px-4 py-3 flex justify-center items-center gap-1">
            Book a demo
          </button>
        </div>
        <div className='text-lg text-[#959AB1] font-normal flex flex-col gap-2 xs:px-20 lg:px-10 md:pl-10 sm:pl-10 max-sm:pl-10 xl:pr-28 xl:pl-10 mt-2'>
          <div className='flex gap-7 pt-1'>
            <div className='flex gap-3 font-medium justify-center items-center'>
              <img src={CircularIcon1} alt="" />
              No Credit card required
            </div>
            <div className='flex gap-3 font-medium justify-center items-center'>
              <img src={CircularIcon2} alt="" />
              Get your first property for free!
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-1/2 sm:w-[50%] max-sm:w-full max-sm:px-10 xl:pr-10 lg:pr-10 md:pr-10">
        <img
          src={heroImages[currentImageIndex]}
          alt="hero image"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
          className="transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Hero;
