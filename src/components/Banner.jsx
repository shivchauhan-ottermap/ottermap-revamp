import React from 'react'
import BottomBanner from '../assets/bottomBanner/bottomBanner.svg';
const Banner = () => {
    return (
        <div className="relative w-full h-[627px]" style={{ backgroundImage: `url(${BottomBanner})` }}>
            <div className="absolute bottom-14 left-20 bg-[#5F615E] rounded-3xl text-[#E1FFD7] pl-7 pt-5 pr-16 pb-6 gap-5 flex flex-col justify-center items-start w-fit">
                <div className="text-3xl font-medium">
                    Your Team’s New Secret Weapon for <br /> Location based Workflows!
                </div>
                <div className="text-lg font-normal">
                    Used by logistics pros, planners, and marketers to <br /> streamline operations and boost engagement.
                </div>
                <div>
                    <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Give Ottermap a try
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
