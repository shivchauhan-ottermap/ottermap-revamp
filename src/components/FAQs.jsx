import React, { useState } from 'react';
import Plus from '../assets/plus.svg';

const FAQs = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleFAQ = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const FAQ = [
        {
            id: 1,
            question: 'What is Ottermap?',
            answer: 'No! OtterMap is easy to use and requires no coding experience. Our user-friendly interface makes it easy to create, customize, and publish maps quickly and efficiently.'
        },
        {
            id: 2,
            question: 'How does Ottermap digitize/measures properties?',
            answer: 'Yes! You can create custom tooltips or popups on markers using OtterMap’s built-in UI editor. It allows you to show additional information when users hover or click on map elements.'
        },
        {
            id: 3,
            question: 'Can I create Interactive popups or tooltips on markers?',
            answer: 'Absolutely! OtterMap provides you with an embed code to easily add your interactive map into any website or app.'
        },
        {
            id: 4,
            question: 'Can I embed maps into my website or app?',
            answer: 'Absolutely! OtterMap provides you with an embed code to easily add your interactive map into any website or app.'
        },
    ];

    return (
        <div className="px-4 sm:px-10">
            <div className='pt-20 sm:pt-28 text-2xl sm:text-3xl lg:text-4xl font-bold text-left sm:pl-10 lg:pl-20'>
                FAQ'S
            </div>

            <div className='flex flex-col gap-5 justify-center items-center pt-10 sm:pt-20 lg:px-20 sm:px-10'>
                {FAQ.map((item) => (
                    <div
                        key={item.id}
                        className='w-full  bg-[#f5f6f7] rounded-xl border cursor-pointer'
                        onClick={() => toggleFAQ(item.id)}
                    >
                        <div className='flex justify-between items-center px-6 sm:px-10 py-6 sm:py-8 text-lg sm:text-xl lg:text-2xl font-normal'>
                            <div>{item.id}. {item.question}</div>
                            <img
                                src={Plus}
                                alt="Toggle"
                                className={`transition-transform duration-200 ${expandedId === item.id ? 'rotate-45' : ''}`}
                            />
                        </div>
                        {expandedId === item.id && (
                            <div className='px-6 sm:px-10 pb-6 sm:pb-8 text-base sm:text-lg text-gray-700'>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default FAQs;
