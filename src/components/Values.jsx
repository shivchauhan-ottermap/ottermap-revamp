import React from 'react';
import RightArrow from '../assets/rightArrow.svg';
import Value1 from '../assets/values/value1.svg';
import Value2 from '../assets/values/value2.svg';
import Value3 from '../assets/values/value3.svg';
import Value4 from '../assets/values/value4.svg';

const Values = () => {
    const valueItems = [{
        value: Value1,
        title: "Precision that wins contracts",
        point: [
            "Accurate, data-backed takeoffs- no more guessworks.",
            "Detailed, professional maps help you stand out in bids",
            "Visual clarity for snow, landscape, & paving proposals.",
            "Eliminate costly estimation errors."
        ],
    }, {
        value: Value2,
        title: "Speed & scale without the overhead",
        point: [
            "Map 10 to 10,000 sites in minutes.",
            "Fast, automated takeoffs from aerials or PDFs.",
            "Reduce manual site visits and estimator hours.",
            "Built for teams who handle multi-site portfolios.",
        ]
    }, {
        value: Value3,
        title: "Build for your workflow",
        point: [
            "Easy-to-use interface—no GIS experience needed.",
            "Mobile and desktop access for field and office teams.",
            "Add notes, zones, and branding to maps.",
            "Export data or integrate with your tools and CRM.",
        ]
    }, {
        value: Value4,
        title: "Support that drives success",
        point: [
            "Free onboarding and tutorials.",
            "White-label maps with your logo and colors.",
            "Responsive customer support for scaling teams.",
            "Free trial or first project free to get started risk-free.",
        ]
    }];

    return (
        <div className="bg-[#f7f9fc] mt-28 py-14 px-4 sm:px-6 lg:px-20">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center gap-6 text-center max-w-6xl mx-auto">
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    With Ottermap, Mapping Becomes Effortless and Reliable
                </h2>
                <p className="text-sm sm:text-base md:text-lg px-2 sm:px-10 md:px-20">
                    Ottermap makes mapping effortless with accurate, real-time data and an intuitive interface. Whether you're exploring, planning, or building, trust our tech-driven platform to guide you every step of the way.
                </p>
                <div className='flex gap-4 justify-center items-center pt-6'>
                    <button className="bg-[#218448] cursor-pointer rounded-full text-white px-4 py-3 flex justify-center items-center gap-2">
                        Try for Free
                        <img src={RightArrow} alt="right arrow" />
                    </button>
                    <button className="border-[#218448] border-2 cursor-pointer rounded-full text-black px-4 py-3 flex justify-center items-center gap-1">Book a demo
                    </button>
                </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 max-w-7xl mx-auto">
                {valueItems.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#218448] p-6 flex flex-col gap-6 rounded-xl bg-white hover:scale-105 transition duration-300 ease-in-out"
                    >
                        <div className="flex flex-col gap-3">
                            <div className="p-2 bg-green-700 w-fit rounded-full">
                                <img src={item.value} alt={`Value ${index + 1}`} />
                            </div>
                            <h3 className="text-base md:text-lg font-bold">
                                {item.title}
                            </h3>
                        </div>
                        <ul className="text-sm space-y-1 list-disc list-outside pl-3">
                            {item.point.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Values;
