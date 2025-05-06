import React from 'react'
import RightArrow from '../assets/rightArrow.svg';
import ProblemSolution1 from '../assets/problemSolution/problemSolution1.svg';
import ProblemSolution2 from '../assets/problemSolution/problemSolution2.svg';
import ProblemSolution3 from '../assets/problemSolution/problemSolution3.svg';

const ProblemAndSolution = () => {
    const problemandSolution = [
        {
            id: 1,
            icon: ProblemSolution1,
            chip: 'GUSSWORK TAKING OVER ACCURACY',
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
        <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-20 pt-12 md:pt-32 pb-8 gap-10">
            <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-5 lg:pl-4 xl:pr-20">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Everything You Need to Map, Measure, and Win More Work
                </div>
                <div className="text-base sm:text-lg lg:text-2xl font-normal">
                    Managing property estimates shouldn’t cost you bids, time, or your sanity. But for most service businesses, it still does.
                </div>
                <div>
                    <button className="bg-[#218448] cursor-pointer rounded-full text-white px-4 py-3 flex justify-center items-center gap-2">
                        Try for Free
                        <img src={RightArrow} alt="right arrow" />
                    </button>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:border-l-4 border-dotted border-[#218448] lg:px-10">
                {problemandSolution.map((item, index) => (
                    <div key={index} className="flex flex-col gap-8 pb-10">
                        <div className='flex flex-col gap-7'>
                            <div className="text-sm font-bold text-[#218448] bg-[#2184484D] rounded-full px-6 py-2 w-fit">
                                {item.chip}
                            </div>
                            <div className="flex items-start gap-7 text-base sm:text-lg font-bold">
                                <img src={item.icon} alt="" />
                                {item.problem}
                            </div>
                        </div>
                        <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#218448]">
                            {item.solution}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ProblemAndSolution
