import React from 'react';
import Logo from '../assets/footerLogo.svg';
import InstaLogo from '../assets/instaLogo.svg';
import LinkedinLogo from '../assets/linkedinLogo.svg';

const Footer = () => {
    return (
        <div className="bg-[#2a2a2a] flex flex-col mt-36 text-white">
            <div className="px-6 sm:px-10 lg:pl-20 py-10 sm:py-14">
                <img src={Logo} alt="Ottermap Logo" />
            </div>

            <div className="px-6 sm:px-10 lg:px-40 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm">
                    {["Home", "Industries", "Resources", "Why we?", "Pricing", "Use cases"].map((section, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="font-bold">{section}</div>
                            <div className="flex flex-col gap-1.5 text-gray-300">
                                <div>Features</div>
                                <div>Our Delivered values</div>
                                <div>Testimonials</div>
                                <div>Success metrics</div>
                                <div>Use cases</div>
                                <div>Walkthrough Video</div>
                                <div>FAQ'S</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 pb-8 border-t border-[#3a3a3a] pt-6">
                <div className="flex flex-wrap gap-4 sm:gap-8 text-white text-xs opacity-50">
                    <div>Terms of use</div>
                    <div>Terms of supply</div>
                    <div>Privacy policy</div>
                    <div>Cookie policy</div>
                    <div>Return policy</div>
                    <div>&copy; Ottermap, 2025</div>
                </div>
                <div className="flex gap-4 sm:gap-6">
                    <img src={InstaLogo} alt="Instagram" className="w-5 h-5" />
                    <img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
