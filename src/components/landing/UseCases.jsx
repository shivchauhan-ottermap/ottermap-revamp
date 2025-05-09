import React from 'react';
import UseCase1 from '../../assets/landing/useCases/useCase1.svg';
import UseCase2 from '../../assets/landing/useCases/useCase2.svg';
import UseCase3 from '../../assets/landing/useCases/useCase3.svg';
import RightArrow from '../../assets/rightArrow.svg';

const UseCases = () => {
    const usecases = [
        {
            img: UseCase1,
            title: "Logistics & Delivery",
            desc: "Track real-time fleets, optimize delivery routes, and share live maps with customers."
        }, {
            img: UseCase2,
            title: "Real estate",
            desc: "Create maps of listings with details, filters, and neighborhood insights."
        }, {
            img: UseCase3,
            title: "Event management",
            desc: "Design interactive event maps for festivals, conferences, or venues with POIs and schedules."
        }
    ];
    return (
        <div className="px-4 sm:px-10 lg:px-20 pt-28 pb-24">
            <div className='flex flex-col gap-5 pb-10'>
                <div className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                    Built for every journey, Powered by every Use case
                </div>
                <div className='text-lg sm:text-xl lg:text-2xl font-normal'>
                    See How OtterMap Works for Your Business
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-5'>
                {usecases.map((caseItem, index) => (
                    <div key={index} className='flex flex-col rounded-2xl w-full lg:w-[30%] bg-white shadow-md'>
                        <img className='rounded-t-xl w-full h-auto' src={caseItem.img} alt={caseItem.title} />
                        <div className='pl-5 h-full flex flex-col justify-between bg-[#2184484D] pb-5 rounded-b-2xl border-t-4 border-[#218448]'>
                            <div>
                                <div className='text-lg font-bold pr-5 pt-3.5 pb-3'>{caseItem.title}</div>
                                <div className='text-sm font-normal pr-5 pb-5'>{caseItem.desc}</div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex items-center gap-1">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='pt-14 pb-4 flex justify-center'>
                <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex items-center gap-2">
                    Read more Use cases
                    <img src={RightArrow} alt="right arrow" />
                </button>
            </div>
        </div>
    );
};

export default UseCases;
