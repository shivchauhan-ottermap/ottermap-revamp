import React from 'react';
import Video from '../assets/video.svg';
import BottomMap from '../assets/bottomMap.svg';

const WalkThrough = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 pt-20 sm:pt-28 px-4 sm:px-8 bg-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                Build Smart Maps in Minutes
            </div>
            <div className="text-base sm:text-lg lg:text-2xl font-normal text-center ">
                From importing data to customizing routes and popups, this quick demo shows you how OtterMap simplifies it all.
            </div>
            <div className="pt-10 sm:pt-16 sm:pb-32 pb-32 w-full flex justify-center">
                <img src={Video} alt="video" className="w-full max-w-4xl h-auto" />
            </div>
        </div>
    );
};

export default WalkThrough;
