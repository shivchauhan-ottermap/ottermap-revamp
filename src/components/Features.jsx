import React from 'react'
import Feature1 from '../assets/features/feature1.svg';
import Feature2 from '../assets/features/feature2.svg';
import Feature3 from '../assets/features/feature3.svg';
import Feature4 from '../assets/features/feature4.svg';
import Feature1a from '../assets/features/feature1-1.svg';
import Feature1b from '../assets/features/feature1-2.svg';
import Feature1c from '../assets/features/feature1-3.svg';
import Feature1d from '../assets/features/feature1-4.svg';
import Feature2a from '../assets/features/feature2-1.svg';
import Feature2b from '../assets/features/feature2-2.svg';
import Feature2c from '../assets/features/feature2-3.svg';
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

            <div className="text-4xl font-semibold  lg:px-20 md:px-10 sm:px-10 max-sm:px-5 mt-12 mb-4 text-center">
                Everything You Need to Map, Measure, and Win More Work
            </div>
            <div className="text-2xl font-normal text-center lg:px-20 md:px-10 sm:px-10 max-sm:px-5 pt-6">
                From fast takeoffs to portfolio-scale mapping, manage sites, and streamline your entire estimating process. Ottermap  equips you with intuitive tools, and combines accuracy, speed, and flexibility. So your team can estimate better and win faster.
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
                                    <img src={Feature1a} alt="" />
                                    High-resolution aerial & satellite image of different time.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature1b} alt="" />
                                    Auto-generated parcel from addresses or pin drops
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature1c} alt="" />
                                    Layered takeoffs: lawns, beds, snow zones, hardscapes, etc.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature1d} alt="" />
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
                                    <img src={Feature2a} alt="" />
                                    Multi-site dashboard to manage 10 to 10,000 properties
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2b} alt="" />
                                    Tagging & filtering by site type, region, or client.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature2c} alt="" />
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
                                Proposal & client deliverables
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3a} alt="" />
                                    Visual proposals with map overlays.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3b} alt="" />
                                    Branded exports & PDF takeoffs
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature3c} alt="" />
                                    Download-ready for client presentations or field teams
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[50%]'>
                        <img src={Feature4} alt="" />
                    </div>

                </div>

                {/* feature 4 */}
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse gap-10 justify-evenly items-center px-10 pt-24'>
                    <div className='xl:w-[50%]'>
                        <img src={Feature1} alt="" />
                    </div>
                    <div className='xl:w-[50%] flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 pr-20'>

                            <div className='xl:text-3xl lg:text-2xl md:text-xl text-3xl font-semibold'>
                                Mapping & Measurement Tools
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature4a} alt="" />
                                    Smart measuring tools: area, line, and count
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature4b} alt="" />
                                    Easy-to-use editing: draw zones, adjust shapes, customize boundaries
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature4c} alt="" />
                                    Notes and labels directly on maps
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
                                Integrations & workflow
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature5a} alt="" />
                                    On-demand integration with CRMs & estimating tools.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature5b} alt="" />
                                    API & Zapier support (Coming soon)
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature5c} alt="" />
                                    Export takeoffs to excel, PDF, or your custom format.
                                </div>

                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[50%]'>
                        <img src={Feature3} alt="" />
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
                                White-label & branding
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature6a} alt="" />
                                    Add your company logo to all exported maps
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature6b} alt="" />
                                    Custom color schemes for service zones
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature6c} alt="" />
                                    Present a fully branded, professional experience to clients.
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
                                Mobile & field asscess
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature7a} alt="" />
                                    Mobile-friendly interface for on-site use.
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature7b} alt="" />
                                    GPS pin drop for accurate service area creation
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature7c} alt="" />
                                    Work seamlessly across desktop & mobile
                                </div>
                            </div>
                            <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex justify-center items-center gap-1">Try for Free
                                <img src={RightArrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[50%]'>
                        <img src={Feature3} alt="" />
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
                                Team collaboration & permission
                            </div>
                            <div className='flex flex-col gap-6 font-normal xl:text-xl lg:text-lg'>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature8a} alt="" />
                                    Multi-user access with role-based permissions
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature8b} alt="" />
                                    Share maps with internal teams or external partners
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={Feature8c} alt="" />
                                    Commenting & notes to streamline communication
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
