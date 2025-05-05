import React from 'react'
import Logo from '../assets/logo.svg';
import DownArrow from '../assets/downArrow.svg';
import RightArrow from '../assets/rightArrow.svg';
const Navbar = () => {
    return (
        <div className='flex w-full justify-between items-center p-5 px-18 bg-white'>
            <img src={Logo} alt="logo" />
            <div className='flex w-fit h-12 rounded-full border-2 border-[#218448] gap-7 px-5 text-[#218448] font-medium'>
                <div className='flex justify-center items-center gap-1 cursor-pointer'>Industries
                    <img width={"10px"} src={DownArrow} alt="" />
                </div>
                <div className='flex justify-center items-center gap-1 cursor-pointer'>Resources
                    <img width={"10px"} src={DownArrow} alt="" />
                </div>
                <div className='flex justify-center items-center gap-1 cursor-pointer'>Why we
                    <img width={"10px"} src={DownArrow} alt="" />
                </div>
                <div className='flex justify-center items-center gap-1 cursor-pointer'>Pricing
                    <img width={"10px"} src={DownArrow} alt="" />
                </div>
                <div className='flex justify-center items-center gap-1 cursor-pointer'>Use Cases</div>
            </div>
            <div className='flex gap-5'>
                <button className='w-fit h-12 border-2 font-semibold rounded-full border-[#218448] bg-white text-black px-6 py-1 cursor-pointer'>Sign In</button>
                <button className='w-fit h-12 border-2 font-semibold rounded-full border-[#218448] bg-[#218448] text-white px-4 py-1 flex justify-center items-center gap-1 cursor-pointer'>Try for free
                    <img src={RightArrow} alt="right arrow" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
