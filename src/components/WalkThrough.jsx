import React from 'react'
import Video from '../assets/video.svg';
import BottomMap from '../assets/bottomMap.svg';

const WalkThrough = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 pt-28 bg-white">
            <div className="text-4xl font-bold">Build Smart Maps in Minutes</div>
            <div className="text-2xl font-normal text-center ">From importing data to customizing routes and popups this quick demo shows you how OtterMap simplifies it all.</div>
            <div className="pt-16 pb-44">
                <img src={Video} alt="video" />
            </div>
        </div>
    )
}

export default WalkThrough
