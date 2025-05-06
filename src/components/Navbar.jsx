import React from 'react'
import Logo from '../assets/logo.svg';
import DownArrow from '../assets/downArrow.svg';
import RightArrow from '../assets/rightArrow.svg';
import Menu from '../assets/menu.svg';
const Navbar = () => {
    return (
        <div className='flex w-full justify-between items-center py-5 xl:px-20 lg:px-10 md:px-5 sm:px-10 px-10 gap-2 bg-white'>
            <div className='w-fit'>

            <img className='w-fit min-w-24' src={Logo} alt="logo" />
            </div>
            <div className='md:flex w-fit h-12 xl:ml-12 lg:text-sm md:text-xs hidden text-xs rounded-full border-2 border-[#218448] gap-7 px-5 text-[#218448] font-medium'>
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
            <div className='md:flex gap-2 hidden'>
                <button className='w-fit h-12 text-sm border-2 font-semibold rounded-full border-[#218448] bg-white text-black px-6 py-1 cursor-pointer text-nowrap'>Sign In</button>
                <button className='w-fit h-12 text-sm border-2 font-semibold rounded-full border-[#218448] bg-[#218448] text-white px-4 py-1 flex justify-center items-center gap-1 cursor-pointer text-nowrap'>Try for free
                    <img src={RightArrow} alt="right arrow" />
                </button>
            </div>
            <div className='hidden max-md:flex'>
                <img src={Menu} alt="" />
            </div>
        </div>
    )
}

export default Navbar
