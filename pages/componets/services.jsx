import React from 'react'

function Services() {
  return (
    <div className='container mx-auto mt-20  sm:py-20 px-6' id='services'>
      <div className='flex items-center justify-between our_service'>
        <div className='serviced_text_card w-[40%] '>
          <div className='font-semibold text-[24px] text-blue-500'>Our Services</div>
          <div className='sm:my-6 my-4 font-Nunito font-bold text-[24px] sm:text-6xl text-[#1D1D1D] '>
            Perfect and Fast Movement
          </div>
          <div className=' font-Quicksand font-normal text-[14px] sm:text-[20px] text-[#464646]'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div>
          <div className='text-blue-500 font-bold text-end'>Read more </div>
        </div>
        <div className='sm:w-[50%] sm:my-6 ' >
          <div className=''>
            <div className='flex service_card1 justify-center gap-7 my-6'>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='./icon1.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>Social Media Management</div>
              </div>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='./icon2.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>Search Engine Optimization</div>
              </div>
            </div>
            <div className='flex service_card2 justify-center gap-7 my-6'>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='./icon3.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>Design</div>
              </div>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='./icon4.png' alt='logind..' /></div>
                <div className='text-center mt-6  text-sm md:text-xl sm:text-2xl font-Quicksand font-bold  text-[#1D1D1D]'>Ads</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
