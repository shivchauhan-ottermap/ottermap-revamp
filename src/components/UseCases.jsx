import React from 'react'
import UseCase1 from '../assets/useCases/useCase1.svg';
import UseCase2 from '../assets/useCases/useCase2.svg';
import UseCase3 from '../assets/useCases/useCase3.svg';
import RightArrow from '../assets/rightArrow.svg';
const UseCases = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 pb-20'>
                <div className='text-4xl font-bold pl-20'>
                    Built for every journey, Powered by every Use case
                </div>
                <div className='text-2xl font-normal pl-20'>
                    See How OtterMap Works for Your Business
                </div>
            </div>

            <div className='flex justify-between gap-5 px-20'>
                <div className='flex flex-col rounded-2xl w-[50%]'>
                    <img className='rounded-t-xl' src={UseCase1} alt="" />
                    <div className='pl-5 bg-[#2184484D] pb-5 rounded-b-2xl border-t-3 border-[#218448]'>
                        <div className='text-lg font-bold pr-5 pt-3.5 pb-3'>Logistics & Delivery</div>
                        <div className='text-sm font-normal pr-5 text-wrap pb-5'>Track real-time fleets, optimize delivery routes, and share live maps with customers.</div>
                        <div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Read more
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col rounded-2xl w-[50%]'>
                    <img className='rounded-t-xl' src={UseCase2} alt="" />
                    <div className='pl-5 bg-[#2184484D] pb-5 rounded-b-2xl border-t-3 border-[#218448]'>
                        <div className='text-lg font-bold pr-5 pt-3.5 pb-3'>Real estate</div>
                        <div className='text-sm font-normal pr-5 text-wrap pb-5'>Create maps of listings with details, filters, and neighborhood insights.</div>
                        <div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col rounded-2xl w-[50%]'>
                    <img className='rounded-t-xl' src={UseCase3} alt="" />
                    <div className='pl-5 bg-[#2184484D] pb-5 rounded-b-2xl border-t-3 border-[#218448]'>
                        <div className='text-lg font-bold pr-5 pt-3.5 pb-3'>Event management</div>
                        <div className='text-sm font-normal pr-5 text-wrap pb-5'>Design interactive event maps for festivals, conferences, or venues with POIs and schedules.</div>
                        <div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Read more
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pt-14 pb-2 flex justify-center'>
                <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Read more Use cases
                    <img src={RightArrow} alt="right arrow" />
                </button>
            </div>
        </div>
    )
}

export default UseCases
