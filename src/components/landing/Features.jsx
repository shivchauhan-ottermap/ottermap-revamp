import React from 'react'
import Feature1 from '../../assets/landing/features/feature1.svg';
import Feature2 from '../../assets/landing/features/feature2.svg';
import Feature3 from '../../assets/landing/features/feature3.svg';
import Feature4 from '../../assets/landing/features/feature4.svg';
import Feature1a from '../../assets/landing/features/feature1-1.svg';
import Feature1b from '../../assets/landing/features/feature1-2.svg';
import Feature1c from '../../assets/landing/features/feature1-3.svg';
import Feature1d from '../../assets/landing/features/feature1-4.svg';
import Feature2a from '../../assets/landing/features/feature2-1.svg';
import Feature2b from '../../assets/landing/features/feature2-2.svg';
import Feature2c from '../../assets/landing/features/feature2-3.svg';
import Feature3a from '../../assets/landing/features/feature3-1.svg';
import Feature3b from '../../assets/landing/features/feature3-2.svg';
import Feature3c from '../../assets/landing/features/feature3-3.svg';
import Feature4a from '../../assets/landing/features/feature4-1.svg';
import Feature4b from '../../assets/landing/features/feature4-2.svg';
import Feature4c from '../../assets/landing/features/feature4-3.svg';
import Feature5a from '../../assets/landing/features/feature5-1.svg';
import Feature5b from '../../assets/landing/features/feature5-2.svg';
import Feature5c from '../../assets/landing/features/feature5-3.svg';
import Feature6a from '../../assets/landing/features/feature6-1.svg';
import Feature6b from '../../assets/landing/features/feature6-2.svg';
import Feature6c from '../../assets/landing/features/feature6-3.svg';
import RightArrow from '../../assets/rightArrow.svg';

const Features = () => {
    const features = [
        {
            image: Feature2,
            heading: 'On Demand automated takeoffs',
            points: [
                {
                    icon: Feature1a,
                    text: 'High-resolution aerial & satellite image of different time.'
                },
                {
                    icon: Feature1b,
                    text: 'Auto-generated parcel from addresses or pin drops',
                },
                {
                    icon: Feature1c,
                    text: 'Layered takeoffs: lawns, beds, snow zones, hardscapes, etc.',
                },
                {
                    icon: Feature1d,
                    text: 'Automated property mapping',
                }
            ]
        },
        {
            image: Feature3,
            heading: 'Portfolio & site management',
            points: [
                {
                    icon: Feature2a,
                    text: 'Multi-site dashboard to manage 10 to 10,000 properties',
                },
                {
                    icon: Feature2b,
                    text: 'Tagging & filtering by site type, region, or client.',
                },
                {
                    icon: Feature2c,
                    text: 'Map version history & change tracking',
                },
            ]
        },
        {
            image: Feature1,
            heading: 'Mapping & Measurement Tools',
            points: [
                {
                    icon: Feature3a,
                    text: 'Smart measuring tools: area, line, and count',
                },
                {
                    icon: Feature3b,
                    text: 'Easy-to-use editing: draw zones, adjust shapes, customize boundaries',
                },
                {
                    icon: Feature3c,
                    text: 'Notes and labels directly on maps',
                },
            ]
        },
        {
            image: Feature3,
            heading: 'White-label & branding',
            points: [
                {
                    icon: Feature4a,
                    text: 'Add your company logo to all exported maps',
                },
                {
                    icon: Feature4b,
                    text: 'Custom color schemes for service zones',
                },
                {
                    icon: Feature4c,
                    text: 'Present a fully branded, professional experience to clients.',
                },
            ]
        },
        {
            image: Feature3,
            heading: 'Mobile & field asscess',
            points: [
                {
                    icon: Feature5a,
                    text: 'Mobile-friendly interface for on-site use.',
                },
                {
                    icon: Feature5b,
                    text: 'GPS pin drop for accurate service area creation',
                },
                {
                    icon: Feature5c,
                    text: 'Work seamlessly across desktop & mobile',
                },
            ]
        },
        {
            image: Feature3,
            heading: 'Team collaboration & permission',
            points: [
                {
                    icon: Feature6a,
                    text: 'Multi-user access with role-based permissions',
                },
                {
                    icon: Feature6b,
                    text: 'Share maps with internal teams or external partners',
                },
                {
                    icon: Feature6c,
                    text: 'Commenting & notes to streamline communication',
                },
            ]
        },
    ]
    return (
        <div className=" ">

            <div className="text-4xl font-semibold lg:px-20 md:px-10 sm:px-10 max-sm:px-5 mb-4 text-center">
                Everything You Need to Map, Measure, and Win More Work
            </div>
            <div className="text-2xl font-normal text-center xl:px-32 lg:px-20 md:px-10 sm:px-10 max-sm:px-5 pt-6">
                From fast takeoffs to portfolio-scale mapping, manage sites, and streamline your entire estimating process. Ottermap  equips you with intuitive tools, and combines accuracy, speed, and flexibility. So your team can estimate better and win faster.
            </div>
            <div className='flex gap-4 pt-6 justify-center items-center'>
                <button className="bg-[#218448] cursor-pointer rounded-full text-white px-4 py-3 flex justify-center items-center gap-2">
                    Try for Free
                    <img src={RightArrow} alt="right arrow" />
                </button>
                <button className="border-[#218448] border-2 cursor-pointer rounded-full text-black px-4 py-3 flex justify-center items-center gap-1">Book a demo
                </button>
            </div>
            <div className='pt-32'>

                {features.map((feature, index) => {
                    const isImageRight = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 justify-between items-center px-20 pb-20`}
                        >
                            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8">
                                <h3 className="text-3xl font-semibold">{feature.heading}</h3>
                                <div className="flex flex-col gap-5 text-lg">
                                    {feature.points.map((point, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <img src={point.icon} alt="" />
                                            <span>{point.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="bg-[#218448] rounded-full text-white px-5 py-3 text-sm flex items-center gap-2">
                                    Try for Free <img src={RightArrow} alt="right arrow" />
                                </button>
                            </div>

                            <div className="w-[50%]">
                                <img src={feature.image} alt={feature.heading} className="w-full h-auto" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Features
