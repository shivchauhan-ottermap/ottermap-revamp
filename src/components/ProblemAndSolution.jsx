import React from 'react'
import RightArrow from '../assets/rightArrow.svg';
import ProblemSolution1 from '../assets/problemSolution/problemSolution1.svg';
import ProblemSolution2 from '../assets/problemSolution/problemSolution2.svg';
import ProblemSolution3 from '../assets/problemSolution/problemSolution3.svg';
import ProblemSolution from '../assets/problemSolution/problemSolution.svg';

const ProblemAndSolution = () => {
    const problemandSolution = [
        {
            id: 1,
            icon: ProblemSolution1,
            chip: 'GUESSWORK TAKING OVER ACCURACY',
            problem: 'Your team is forced to “guesstimate” without reliable property measurements—leading to underbidding, overpromising, and eventually losing trust.',
            solution: 'Ottermap delivers precise takeoffs and detailed property maps, so every bid is backed by data not assumptions.'
        },
        {
            id: 2,
            icon: ProblemSolution2,
            chip: 'MISSED DEADLINE, LOST DEALS',
            problem: 'Focusing on one proposal means missing others. Manual workflows and site visits don’t scale when bids stack up.',
            solution: 'Focusing on one proposal means missing others. Manual workflows and site visits don’t scale when bids stack up.'
        },
        {
            id: 3,
            icon: ProblemSolution3,
            chip: 'INCONSISTENT DELIVERABLES HURT CREDIBILITY',
            problem: 'Different estimators use different tools and formats. Your proposals lack consistency—and your brand suffers.',
            solution: 'Ottermap standardizes your mapping and takeoff process, so every proposal is clean, professional, and aligned with your SOP.'
        },
        {
            id: 4,
            icon: ProblemSolution1,
            chip: 'MULTI-SITE PORTFOLIO BOTTLENECK',
            problem: 'Handling portfolios like Walmart, Costco, or Wells Fargo? Managing 50, 500, or even 5,000 sites can overwhelm your team and lead to missed opportunities.',
            solution: 'Ottermap automates batch mapping and lets you generate site-ready takeoffs at scale—quote dozens of properties in days, not weeks.'
        },
    ]
    return (
        <div className="flex flex-col px-4 sm:px-8 lg:px-20 pt-12 md:pt-32 pb-8 gap-10">
            <div className="w-full flex flex-col justify-center items-center gap-6 lg:pl-4 xl:pr-20 ">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                    Managing property estimates shouldn’t cost you bids, time, or your sanity. But for most service businesses, it still does.
                </div>

                <div className='flex gap-4 justify-center items-center'>
                    <button className="bg-[#218448] cursor-pointer rounded-full text-white px-4 py-3 flex justify-center items-center gap-2">
                        Try for Free
                        <img src={RightArrow} alt="right arrow" />
                    </button>
                    <button className="border-[#218448] border-2 cursor-pointer rounded-full text-black px-4 py-3 flex justify-center items-center gap-1">Book a demo
                    </button>
                </div>
            </div>


            <div className='pt-32 flex justify-between items-start gap-8'>
                <div className='w-1/2'>
                    <img src={ProblemSolution} alt="" />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                    {problemandSolution.map((item, idx) => (
                        <div
                            key={idx}
                            className="group not-hover:border-b-2 border-[#218448] shadow-lg cursor-pointer w-[80%] rounded-b-lg flex flex-col justify-start py-5 pl-3.5 hover:bg-[#2184484D] hover:border-l-4 hover:rounded-t-lg transition-all duration-1000 ease-in-out"
                        >
                            <div className="flex flex-col text-xl font-bold text-[#de0000] hover:gap-3.5">
                                <div className="flex gap-2">
                                    <img className="w-7 h-7 object-contain" src={item.icon} alt="Problem icon" />
                                    {item.chip}
                                </div>
                                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
                                    <div className="text-lg text-black">
                                        {item.problem}
                                    </div>
                                    <div className="text-2xl font-medium text-[#218448] mt-6 pr-8">
                                        {item.solution}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



            {/* <div className=' flex-col text-xl font-bold text-[#de0000] gap-6 transition-opacity opacity-0 hidden duration-200'>

                                <div className='flex flex-col gap-4'>

                                    <div className='flex gap-5'>

                                        <img className="w-6 h-6 object-contain" src={_.icon} alt="Problem icon" />
                                        {_.chip}
                                    </div>
                                    <div className='text-lg text-black'>
                                        {_.problem}
                                    </div>
                                </div>
                                <div className='text-2xl font-medium text-[#218448]'>
                                    {_.solution}
                                </div>
                            </div> */}



            {/* <div className="pt-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {problemandSolution.map((_, idx) => (
                        <div key={idx} className="border rounded-lg p-4 bg-white shadow-md flex flex-col gap-6 pt-8 pb-9 pl-8">
                            <div className="flex items-center gap-3 text-lg font-bold text-[#ff0000] uppercase bg-[#2184484D] rounded-full px-3 py-1 w-fit mb-3">
                                <img className="w-6 h-6 object-contain" src={_.icon} alt="Problem icon" />
                                {_.chip}
                            </div>
                            <div className="text-lg font-bold mb-2">
                                {_.problem}
                            </div>
                            <div className="text-[#218448] text-2xl">
                                {_.solution}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>

    )
}

export default ProblemAndSolution
