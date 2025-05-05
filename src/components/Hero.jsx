import React from 'react'
import TopImage from '../assets/topImage.svg';
import RightArrow from '../assets/rightArrow.svg';
import CircularImage from '../assets/circularImage.svg';
import CircularImage1 from '../assets/circularImage1.svg';
const Hero = () => {
    return (
        <div className="flex sm:flex-col xl:flex-row sm:items-center xs:flex-col flex-row justify-evenly xl:items-start w-full xl:py-20 xl:pr-10 xl:pl-10 gap-10 bg-white">
            <div className="flex flex-col w-1/2 gap-7">
                <div className="text-5xl font-semibold sm:px-0 sm:pl-0 sm:pr-0 xl:pr-28 xl:pl-10 pr-56 pl-10">
                    Accurate Takeoffs for Landscaping, Snow, and Paving Teams - Faster Bids, Smarter Jobs
                </div>
                <div className="font-medium text-xl sm:pr-0 sm:pl-0 pr-28 xl:pr-28 xl:pl-10 pl-10">
                Generate precise site maps and area takeoffs in minutes no manual Measurements, no guesswork. Just faster proposals and better margins.
                </div>
                <div className="xl:p-4 mt-2 xl:pr-28 xl:pl-10 lg:pl-10">
                    <button className="bg-[#218448] cursor-pointer rounded-full text-white px-4 py-3 flex justify-center items-center gap-1">Try for Free
                        <img src={RightArrow} alt="right arrow" />
                    </button>
                </div>
                <div className='text-lg text-[#959AB1] font-normal flex flex-col gap-2 xs:px-20 lg:px-10 xl:pr-28 xl:pl-10 mt-1'>
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
            <div className="w-1/2 pr-10">
                <img className="rounded-lg w-full" src={TopImage} alt="map image" />
                {/* img */}
            </div>
        </div>
    )
}

export default Hero
