import React from 'react'
import RightArrow from '../assets/rightArrow.svg';
import Value1 from '../assets/values/value1.svg';
import Value2 from '../assets/values/value2.svg';
import Value3 from '../assets/values/value3.svg';
import Value4 from '../assets/values/value4.svg';

const Values = () => {
    return (
        <div className='bg-[#f7f9fc] mt-28 py-14'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex gap-6 flex-col justify-center items-center'>
                    <div className='text-4xl font-bold'>With Ottermap, Mapping Becomes Effortless and Reliable</div>
                    <div className='px-96 text-center'>Ottermap makes mapping effortless with accurate, real-time data and an intuitive interface. Whether you're exploring, planning, or building, trust our tech-driven platform to guide you every step of the way.</div>
                </div>
                <div className='pt-10'>
                    <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                        <img src={RightArrow} alt="right arrow" />
                    </button>
                </div>
            </div>
            <div className='flex justify-between gap-5 px-20 pt-10 pb-14'>
                <div className='border border-[#218448] pr-5 pl-11 pt-5 pb-11 w-fit flex flex-col gap-7 rounded-xl'>
                    <div className='flex flex-col gap-4'>
                        <div className='px-6 py-2 bg-green-700 w-fit rounded-full'>
                            <img src={Value1} alt="" />
                        </div>
                        <div className='text-lg font-bold'>Precision that wins contracts</div>
                    </div>
                    <div className='text-sm'>
                        <div className='w-fit'>1. Accurate, data-backed takeoffs- no more guessworks.</div>
                        <div className='w-fit'>2. Detailed, professional maps help you stand out in bids.</div>
                        <div className='w-fit'>3. Visual clarity for snow, landscape, & paving proposals.</div>
                        <div className='w-fit'>4. Eliminate costly estimation errors</div>
                    </div>
                </div>
                <div className='border border-[#218448] pr-5 pl-11 pt-5 pb-11 w-fit flex flex-col gap-7 rounded-xl'>
                    <div className='flex flex-col gap-4'>
                        <div className='px-6 py-2 bg-green-700 w-fit rounded-full'>
                            <img src={Value2} alt="" />
                        </div>
                        <div className='text-lg font-bold'>Precision that wins contracts</div>
                    </div>
                    <div className='text-sm'>
                        <div className='w-fit'>1. Accurate, data-backed takeoffs- no more guessworks.</div>
                        <div className='w-fit'>2. Detailed, professional maps help you stand out in bids.</div>
                        <div className='w-fit'>3. Visual clarity for snow, landscape, & paving proposals.</div>
                        <div className='w-fit'>4. Eliminate costly estimation errors</div>
                    </div>
                </div>
                <div className='border border-[#218448] pr-5 pl-11 pt-5 pb-11 w-fit flex flex-col gap-7 rounded-xl'>
                    <div className='flex flex-col gap-4'>
                        <div className='px-6 py-2 bg-green-700 w-fit rounded-full'>
                            <img src={Value3} alt="" />
                        </div>
                        <div className='text-lg font-bold'>Precision that wins contracts</div>
                    </div>
                    <div className='text-sm'>
                        <div className='w-fit'>1. Accurate, data-backed takeoffs- no more guessworks.</div>
                        <div className='w-fit'>2. Detailed, professional maps help you stand out in bids.</div>
                        <div className='w-fit'>3. Visual clarity for snow, landscape, & paving proposals.</div>
                        <div className='w-fit'>4. Eliminate costly estimation errors</div>
                    </div>
                </div>
                <div className='border border-[#218448] pr-5 pl-11 pt-5 pb-11 w-fit flex flex-col gap-7 rounded-xl'>
                    <div className='flex flex-col gap-4'>
                        <div className='px-6 py-2 bg-green-700 w-fit rounded-full'>
                            <img src={Value4} alt="" />
                        </div>
                        <div className='text-lg font-bold'>Precision that wins contracts</div>
                    </div>
                    <div className='text-sm'>
                        <div className='w-fit'>1. Accurate, data-backed takeoffs- no more guessworks.</div>
                        <div className='w-fit'>2. Detailed, professional maps help you stand out in bids.</div>
                        <div className='w-fit'>3. Visual clarity for snow, landscape, & paving proposals.</div>
                        <div className='w-fit'>4. Eliminate costly estimation errors</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values
