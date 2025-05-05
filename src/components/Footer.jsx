import React from 'react'
import Logo from '../assets/footerLogo.svg';
import InstaLogo from '../assets/instaLogo.svg';
import LinkedinLogo from '../assets/linkedinLogo.svg';
const Footer = () => {
    return (
        <div className='bg-[#2a2a2a] flex flex-col mt-36'>
            <div className='pl-20 py-14'>
                <img src={Logo} alt="" />
            </div>
            <div>
                <div className='text-white text-sm flex justify-center px-40 pb-24 gap-14'>

                    <div className='flex flex-col gap-5'>
                        <div className='font-bold'>
                            Home
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <div>Features</div>
                            <div>Our Delivered values</div>
                            <div>Testimonials</div>
                            <div>Success metrics</div>
                            <div>Use cases</div>
                            <div>Walkthrough Video</div>
                            <div>FAQ'S</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='font-bold'>
                            Industries
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <div>Features</div>
                            <div>Our Delivered values</div>
                            <div>Testimonials</div>
                            <div>Success metrics</div>
                            <div>Use cases</div>
                            <div>Walkthrough Video</div>
                            <div>FAQ'S</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='font-bold'>
                            Resources
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <div>Features</div>
                            <div>Our Delivered values</div>
                            <div>Testimonials</div>
                            <div>Success metrics</div>
                            <div>Use cases</div>
                            <div>Walkthrough Video</div>
                            <div>FAQ'S</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='font-bold'>
                            Why we?
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <div>Features</div>
                            <div>Our Delivered values</div>
                            <div>Testimonials</div>
                            <div>Success metrics</div>
                            <div>Use cases</div>
                            <div>Walkthrough Video</div>
                            <div>FAQ'S</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='font-bold'>
                            Pricing
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <div>Features</div>
                            <div>Our Delivered values</div>
                            <div>Testimonials</div>
                            <div>Success metrics</div>
                            <div>Use cases</div>
                            <div>Walkthrough Video</div>
                            <div>FAQ'S</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='font-bold'>
                            Use cases
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <div>Features</div>
                            <div>Our Delivered values</div>
                            <div>Testimonials</div>
                            <div>Success metrics</div>
                            <div>Use cases</div>
                            <div>Walkthrough Video</div>
                            <div>FAQ'S</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='px-20 flex justify-between pb-8'>
                <div className='flex gap-8 text-white opacity-40'>
                    <div>Terms of use</div>
                    <div>Terms of supply</div>
                    <div>Privacy policy</div>
                    <div>Cookie policy</div>
                    <div>Return policy</div>
                    <div>&copy; Ottermap, 2025</div>
                </div>
                <div className='flex gap-6'>
                    <img src={InstaLogo} alt="" />
                    <img src={LinkedinLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
