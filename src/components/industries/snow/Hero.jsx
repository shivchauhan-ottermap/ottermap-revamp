import React from 'react';
import HeroImage from '../../../assets/industries/snow/hero/heroImage.svg';

const Hero = () => {
    return (
        <div className="bg-[#218448] text-white py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center">

            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:px-10 text-center lg:text-left mt-10 lg:mt-0">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-snug">
                    Get Snow Bids Out Faster – with Accurate Maps and Zero Site Visits
                </h1>
                <p className="text-base sm:text-lg lg:text-xl font-normal">
                    Ottermap automates snow removal takeoffs with layered, high-res maps—so you can quote more properties, win more contracts, and stay ahead of winter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm pb-10">
                    <button className="bg-white text-black border-2 border-white rounded-full px-6 py-3">
                        Get started with Ottermap
                    </button>
                    <button className="text-white border-2 border-white rounded-full px-6 py-3">
                        Book a demo
                    </button>
                </div>
            </div>

            <div className="xl:w-[50%] flex justify-center">
                <img src={HeroImage} alt="Hero" className=" w-full" />
            </div>
        </div>
    );
};

export default Hero;
