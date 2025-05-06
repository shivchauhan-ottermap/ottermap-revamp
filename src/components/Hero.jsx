import React from 'react'
import HeroImage1 from '../assets/heroImages/heroImage1.svg';
import RightArrow from '../assets/rightArrow.svg';
import CircularImage from '../assets/circularImage.svg';
import CircularImage1 from '../assets/circularImage1.svg';
const Hero = () => {
    return (
        <div className="flex xl:items-start lg:items-start md:items-start sm:items-start max-sm:flex-col justify-evenly w-full xl:py-20 xl:pr-10 xl:pl-10 lg:pt-20 md:pt-20 sm:pt-20 max-sm:pt-20 gap-10 bg-white">
            <div className="flex flex-col w-1/2 max-sm:w-full gap-7">
                <div className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-semibold xl:pr-20 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 max-sm:pl-10">
                    Accurate Takeoffs for Landscaping, Snow, and Paving Teams - Faster Bids, Smarter Jobs
                </div>
                <div className="font-medium text-xl xl:pl-10 xl:pr-20 lg:pl-10 md:pl-10 sm:pl-10 max-sm:pl-10 max-sm:px-5">
                    Generate precise site maps and area takeoffs in minutes no manual Measurements, no guesswork. Just faster proposals and better margins.
                </div>
                <div className="xl:p-4 mt-2 xl:pr-28 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 max-sm:pl-10">
                    <button className="bg-[#218448] cursor-pointer rounded-full text-white px-4 py-3 flex justify-center items-center gap-1">Try for Free
                        <img src={RightArrow} alt="right arrow" />
                    </button>
                </div>
                <div className='text-lg text-[#959AB1] font-normal flex flex-col gap-2 xs:px-20 lg:px-10 md:pl-10 sm:pl-10 max-sm:pl-10 xl:pr-28 xl:pl-10 mt-1'>
                    Companies that trust us:
                    <div className='flex gap-3 pt-1'>
                        <div>
                            <img src={CircularImage} alt="" />
                        </div>
                        <div>
                            <img src={CircularImage1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:w-1/2 sm:w-[50%] max-sm:w-full max-sm:px-10 xl:pr-10 lg:pr-10 md:pr-10">
                <img className="rounded-lg w-full" src={HeroImage1} alt="map image" />
                {/* img */}
            </div>
        </div>
    )
}

export default Hero
