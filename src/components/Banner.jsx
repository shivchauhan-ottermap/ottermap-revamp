import React from 'react';
import BottomBanner from '../assets/bottomBanner/bottomBanner.svg';

const Banner = () => {
    return (
        <div
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[627px] bg-cover bg-center"
            style={{ backgroundImage: `url(${BottomBanner})` }}
        >
            <div className="absolute bottom-8 sm:bottom-12 lg:bottom-14 left-4 sm:left-10 lg:left-20 bg-[#5F615E] rounded-3xl text-[#E1FFD7] px-5 sm:px-7 lg:pl-7 lg:pr-16 py-6 flex flex-col gap-4 w-[90%] sm:w-[80%] md:w-fit">
                <div className="text-lg sm:text-xl lg:text-3xl font-medium leading-snug">
                    Your Team’s New Secret Weapon for <br className="hidden sm:block" /> Location based Workflows!
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-normal leading-snug">
                    Used by logistics pros, planners, and marketers to <br className="hidden sm:block" /> streamline operations and boost engagement.
                </div>
                <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex items-center gap-2">
                    Give Ottermap a try
                </button>
            </div>
        </div>
    );
};

export default Banner;
