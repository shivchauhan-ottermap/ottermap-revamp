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
            answer: 'Ottermap is an end-to-end, fully automated property measurement platform, where you do some clicks and get custom tailored results as per your RFP needs.'
        },
        {
            id: 2,
            question: 'How does Ottermap digitize/measures properties?',
            answer: 'We use latest technology to process high definition aerial imagery with the help of AI & ML to churn out data that is most relevant to your use.'
        },
        {
            id: 3,
            question: 'What type of property measurements can I request at Ottermap?',
            answer: 'You can measure any property for surface area and its features that are standard across the any of the landscaping industry or pavement industry.'
        },
        {
            id: 4,
            question: 'How does Ottermap handle a property covered by trees?',
            answer: 'Currently we are in the process of sourcing high definition imagery taken at different times throughout the year from different service providers across the state for you to be able to map properties that have dense canopy as well.'
        },
        {
            id: 5,
            question: 'Can Ottermap measure hundreds of properties in one-go?',
            answer: 'Yes, you can get thousands of properties measured across US, you just need to share the list of addresses and features that you will like us to deliver. Please drop us an email for multiple properties: info@ottermap.com'
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
