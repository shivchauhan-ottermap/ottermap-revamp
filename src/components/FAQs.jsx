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
            question: 'Do I need any coding experience to use OtterMap?',
            answer: 'No! OtterMap is easy to use and requires no coding experience. Our user-friendly interface makes it easy to create, customize, and publish maps quickly and efficiently.'
        },
        {
            id: 2,
            question: 'Can I create interactive popups or tooltips on markers?',
            answer: 'Yes! You can create custom tooltips or popups on markers using OtterMap’s built-in UI editor. It allows you to show additional information when users hover or click on map elements.'
        },
        {
            id: 3,
            question: 'Can I embed maps into my website or app?',
            answer: 'Absolutely! OtterMap provides you with an embed code to easily add your interactive map into any website or app.'
        },
    ];

    return (
        <div>
            <div className='pt-28 pl-20 text-4xl font-bold'>
                FAQ'S
            </div>

            <div className='flex flex-col gap-5 justify-center items-center pt-20'>
                {FAQ.map((item) => (
                    <div
                        key={item.id}
                        className='w-[90%] bg-[#f5f6f7] rounded-xl border cursor-pointer'
                        onClick={() => toggleFAQ(item.id)}
                    >
                        <div className='flex justify-between items-center px-10 py-8 text-2xl font-normal'>
                            <div>{item.id}. {item.question}</div>
                            <img
                                src={Plus}
                                alt="Toggle"
                                className={`transition-transform duration-200 ${expandedId === item.id ? 'rotate-45' : ''}`}
                            />
                        </div>
                        {expandedId === item.id && (
                            <div className='px-10 pb-8 text-lg text-gray-700'>
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
