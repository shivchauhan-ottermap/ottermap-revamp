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
        <div className="flex flex-col px-4 sm:px-8 lg:px-20 pt-12 md:pt-32 pb-8 gap-10">
            <div className="w-full flex flex-col justify-center items-center gap-6 lg:pl-4 xl:pr-20 ">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                    Managing property estimates shouldn’t cost you bids, time, or your sanity. But for most service businesses, it still does.
                </div>

                <div>
                    <button className="bg-[#218448] cursor-pointer rounded-full text-white px-4 py-3 flex justify-center items-center gap-2">
                        Try for Free
                        <img src={RightArrow} alt="right arrow" />
                    </button>
                </div>
            </div>
            <div className="pt-10 px-4">
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
            </div>
        </div>

    )
}

export default ProblemAndSolution
