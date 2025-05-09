import React from 'react'
import Logo from '../../assets/logo.svg';
import TimeIcon from '../../assets/landing/bookMeeting/bookMeetingTimeIcon.svg';
import VideoIcon from '../../assets/landing/bookMeeting/bookMeetingVideoIcon.svg';
import UserIcon from '../../assets/landing/bookMeeting/bookMeetingUserIcon.svg';
import { InlineWidget } from "react-calendly";

const BookMeeting = () => {
    return (
        <div className='mb-32 mt-2'>
            <div className='text-4xl font-bold pb-12 flex justify-center'>
                See how Ottermap works for you!
            </div>
            <div className='flex mx-20 bg-[#218448] rounded-xl'>
                <div className='border-r border-r-white w-[50%]'>
                    <div className='flex flex-col pl-20 pt-11'>
                        <div className='bg-white rounded-lg w-fit px-4 py-2.5'>
                            <img src={Logo} alt="" />
                        </div>
                        <div className='pt-8 pb-9 text-4xl font-bold text-white'>
                            Ottermap Demo request
                        </div>
                        <div className='text-sm font-medium text-white flex flex-col gap-4 pb-24'>
                            <div className='flex gap-3'>
                                <img src={TimeIcon} alt="time icon" />
                                30 min
                            </div>
                            <div className='flex gap-3'>
                                <img src={VideoIcon} alt="video icon" />
                                Web conferencing details provided upon confirmation.
                            </div>
                            <div className='flex gap-3'>
                                <img src={UserIcon} alt="user icon" />
                                Amit Verma, Founder & CEO
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[50%] flex justify-center items-center'>
                    <div className='border h-[90%] w-[50%]'>
                    <InlineWidget styles={{height: "100%", width: "100%" }} url="https://calendly.com/your_scheduling_page" />
                    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookMeeting
