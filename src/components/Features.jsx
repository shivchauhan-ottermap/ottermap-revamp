import React from 'react'
import Feature1 from '../assets/features/feature1.svg';
import Feature2 from '../assets/features/feature2.svg';
import Feature3 from '../assets/features/feature3.svg';
import Feature4 from '../assets/features/feature4.svg';
import Feature1a from '../assets/features/feature1-1.svg';
import Feature1b from '../assets/features/feature1-2.svg';
import Feature1c from '../assets/features/feature1-3.svg';
import Feature2a from '../assets/features/feature2-1.svg';
// import Feature2b from '../assets/features/feature2-2.svg';
import Feature2c from '../assets/features/feature2-3.svg';
import Feature2d from '../assets/features/feature2-4.svg';
import Feature3a from '../assets/features/feature3-1.svg';
import Feature3b from '../assets/features/feature3-2.svg';
import Feature3c from '../assets/features/feature3-3.svg';
import Feature4a from '../assets/features/feature4-1.svg';
import Feature4b from '../assets/features/feature4-2.svg';
import Feature4c from '../assets/features/feature4-3.svg';
import Feature5a from '../assets/features/feature5-1.svg';
import Feature5b from '../assets/features/feature5-2.svg';
import Feature5c from '../assets/features/feature5-3.svg';
import Feature6a from '../assets/features/feature6-1.svg';
import Feature6b from '../assets/features/feature6-2.svg';
import Feature6c from '../assets/features/feature6-3.svg';
import Feature7a from '../assets/features/feature7-1.svg';
import Feature7b from '../assets/features/feature7-2.svg';
import Feature7c from '../assets/features/feature7-3.svg';
import Feature8a from '../assets/features/feature8-1.svg';
import Feature8b from '../assets/features/feature8-2.svg';
import Feature8c from '../assets/features/feature8-3.svg';
import RightArrow from '../assets/rightArrow.svg';
const Features = () => {
    return (
        <div className=" ">

            <div className="text-4xl font-semibold xl:px-96 lg:px-20 md:px-10 sm:px-10 max-sm:px-5 mt-12 mb-4 text-center">
                Map Like a Pro, Without Being One
            </div>
            <div className="text-2xl font-normal text-center lg:px-20 md:px-10 sm:px-10 max-sm:px-5">
                OtterMap gives you everything you need to visualize location data easily.
            </div>
            <div className='pt-32'>


                {/* feature 1 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col gap-10 justify-evenly items-center px-10'>

                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-10'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                On Demand automated takeoffs
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2a} alt="" />
                                    High-resolution aerial & satellite image of different time.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2d} alt="" />
                                    Auto-generated parcel from addresses or pin drops
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2c} alt="" />
                                    Layered takeoffs: lawns, beds, snow zones, hardscapes, etc.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2d} alt="" />
                                    Automated property mapping
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[50%]'>
                        <img src={Feature2} alt="" />
                    </div>
                </div>

                {/* feature 2 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse gap-10 justify-evenly items-center px-10 pt-24'>
                    <div className='xl:w-[50%]'>
                        <img src={Feature3} alt="" />
                    </div>
                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-20'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                Portfolio & site management
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3a} alt="" />
                                    Multi-site dashboard to manage 10 to 10,000 properties
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3b} alt="" />
                                    Tagging & filtering by site type, region, or client.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3c} alt="" />
                                    Map version history & change tracking
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* feature 3 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col gap-10 justify-evenly items-center px-10 pt-24'>

                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-10'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                On Demand automated takeoffs
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2a} alt="" />
                                    High-resolution aerial & satellite image of different time.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2d} alt="" />
                                    Auto-generated parcel from addresses or pin drops
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2c} alt="" />
                                    Layered takeoffs: lawns, beds, snow zones, hardscapes, etc.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2d} alt="" />
                                    Automated property mapping
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[50%]'>
                        <img src={Feature2} alt="" />
                    </div>

                </div>

                {/* feature 4 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse gap-10 justify-evenly items-center px-10 pt-24'>
                    <div className='xl:w-[50%]'>
                        <img src={Feature3} alt="" />
                    </div>
                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-20'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                Portfolio & site management
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3a} alt="" />
                                    Multi-site dashboard to manage 10 to 10,000 properties
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3b} alt="" />
                                    Tagging & filtering by site type, region, or client.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3c} alt="" />
                                    Map version history & change tracking
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* feature 5 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col gap-10 justify-evenly items-center px-10 pt-24'>

                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-10'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                On Demand automated takeoffs
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2a} alt="" />
                                    High-resolution aerial & satellite image of different time.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2d} alt="" />
                                    Auto-generated parcel from addresses or pin drops
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2c} alt="" />
                                    Layered takeoffs: lawns, beds, snow zones, hardscapes, etc.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2d} alt="" />
                                    Automated property mapping
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[50%]'>
                        <img src={Feature2} alt="" />
                    </div>

                </div>

                {/* feature 6 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse gap-10 justify-evenly items-center px-10 pt-24'>
                    <div className='xl:w-[50%]'>
                        <img src={Feature3} alt="" />
                    </div>
                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-20'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                Portfolio & site management
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3a} alt="" />
                                    Multi-site dashboard to manage 10 to 10,000 properties
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3b} alt="" />
                                    Tagging & filtering by site type, region, or client.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3c} alt="" />
                                    Map version history & change tracking
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>

                </div>


                {/* feature 7 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col gap-10 justify-evenly items-center px-10 pt-24'>

                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-10'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                On Demand automated takeoffs
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2a} alt="" />
                                    High-resolution aerial & satellite image of different time.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2d} alt="" />
                                    Auto-generated parcel from addresses or pin drops
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2c} alt="" />
                                    Layered takeoffs: lawns, beds, snow zones, hardscapes, etc.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2d} alt="" />
                                    Automated property mapping
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[50%]'>
                        <img src={Feature2} alt="" />
                    </div>

                </div>


                {/* feature 8 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse gap-10 justify-evenly items-center px-10 pt-24'>
                    <div className='xl:w-[50%]'>
                        <img src={Feature3} alt="" />
                    </div>
                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-20'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                Portfolio & site management
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3a} alt="" />
                                    Multi-site dashboard to manage 10 to 10,000 properties
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3b} alt="" />
                                    Tagging & filtering by site type, region, or client.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3c} alt="" />
                                    Map version history & change tracking
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}

export default Features
