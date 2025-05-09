import React from 'react'
import Icon1 from '../../../assets/industries/snow/challenges/challengeIcon1.svg';
import Icon2 from '../../../assets/industries/snow/challenges/challengeIcon2.svg';
import Icon3 from '../../../assets/industries/snow/challenges/challengeIcon3.svg';
import Icon4 from '../../../assets/industries/snow/challenges/challengeIcon4.svg';

const Challenges = () => {
    const challenges = [
        {
            id: 1,
            icon: Icon1,
            title: 'Manual estimates slow you down',
            desc: 'Estimators are forced to visit every site just to get the basic measurements needed to bid.',
        },
        {
            id: 2,
            icon: Icon2,
            title: 'Inconsistent takeoffs = risky pricing',
            desc: 'Without standardized snow zones, each estimator calculates areas differently leading to underpricing or operational oversights.',
        },
        {
            id: 3,
            icon: Icon3,
            title: 'Managing large portfolio is overwhelming',
            desc: 'From retail chains to logistics parks, handling multi-site snow bids gets chaotic without the right tools.',
        },
        {
            id: 4,
            icon: Icon4,
            title: 'Too many hours spent per site',
            desc: 'When you\'re racing against snowfall and competitors, time becomes your biggest enemy.',
        },
    ]
    return (
        <div>
            <div className='flex flex-col gap-6 items-center'>
                <div className='text-4xl font-bold'>
                    The Challenges of Snow Estimating
                </div>
                <div className='text-2xl font-normal'>
                    Why traditional snow bid workflows fall short
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mt-12">
    {
        challenges.map((challenge, index) => (
            <div
                key={index}
                className="flex flex-col gap-4 p-6 shadow-md border w-full sm:w-[90%] md:w-[45%] lg:w-[30%]"
            >
                <div>
                    <img src={challenge.icon} alt="" />
                </div>
                <div className="text-xl font-medium">
                    {challenge.title}
                </div>
                <div className="text-base font-normal">
                    {challenge.desc}
                </div>
            </div>
        ))
    }
</div>

        </div>
    )
}

export default Challenges
