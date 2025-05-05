import React from 'react';
import CircularImage from '../assets/circularImage.svg';
import CircularImage1 from '../assets/circularImage1.svg';

const Testimonial = () => {
  return (
    <div className="bg-[#F3F1EF] w-full flex justify-center flex-col pt-10 pb-14 gap-12">
            <div className="flex flex-col items-start pl-20 gap-2 ">
    
              <div className="text-3xl font-bold">Real Stories from Real People</div>
              <div className="text-2xl font-semibold">Hear how teams across industries use OtterMap to save time, cut costs, and stay in control.</div>
            </div>
            <div className="flex justify-between gap-5 px-20 w-full">
              <div className="w-[40%] rounded-xl bg-white flex justify-between gap-14 p-9 text-sm text-[#587485] flex-col">
                Ottermap's exceptional communication kept us on track. They're focused on our needs, respecting our time and business. Invaluable support, ensuring smooth operations.
                <div className="flex gap-3">
                  <div className="rounded-full">
                    <img className="w-fit" src={CircularImage} alt="story logo" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold text-[#333333]">Bill Jacobson</div>
                    <div className="text-xs text-[#587485]">VP-Business Development</div>
                  </div>
                </div>
              </div>
              <div className="w-[40%] rounded-xl bg-white flex justify-between gap-14 p-9 text-sm text-[#587485] flex-col">
                Ottermap has been great for our company! Their accuracy and speed for site maps are like none other. Any suggestions for how to make our experience better have been taken into consideration and implemented thoroughly.
                <div className="flex gap-3">
                  <div className="rounded-full">
                    <img className="w-fit" src={CircularImage1} alt="story logo" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold text-[#333333]">Bill Jacobson</div>
                    <div className="text-xs text-[#587485]">VP-Business Development</div>
                  </div>
                </div>
              </div>
              <div className="w-[40%] rounded-xl bg-white flex justify-between gap-14 p-9 text-sm text-[#587485] flex-col">
                Ottermap's exceptional communication kept us on track. They're focused on our needs, respecting our time and business. Invaluable support, ensuring smooth operations.
                <div className="flex gap-3">
                  <div className="rounded-full">
                    <img className="w-fit" src={CircularImage} alt="story logo" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold text-[#333333]">Bill Jacobson</div>
                    <div className="text-xs text-[#587485]">VP-Business Development</div>
                  </div>
                </div>
              </div>
              <div className="w-[40%] rounded-xl bg-white flex justify-between gap-14 p-9 text-sm text-[#587485] flex-col">
                Ottermap's exceptional communication kept us on track. They're focused on our needs, respecting our time and business. Invaluable support, ensuring smooth operations.
                <div className="flex gap-3">
                  <div className="rounded-full">
                    <img className="w-fit" src={CircularImage} alt="story logo" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold text-[#333333]">Bill Jacobson</div>
                    <div className="text-xs text-[#587485]">VP-Business Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Testimonial
