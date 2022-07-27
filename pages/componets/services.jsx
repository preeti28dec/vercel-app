import React from 'react'

function Services() {
  return (
    <div className='container mx-auto mt-20 py-20 px-6' id='services'>
      <div className='flex items-center justify-between our_service'>
        <div className='w-[40%] '>
          <div className='font-semibold text-[24px] text-blue-500'>Our Services</div>
          <div className='service_text'>
            Perfect and Fast Movement
          </div>
          <div className=' font-Quicksand font-normal text-[20px] text-[#464646]'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div>
          <div className='text-blue-500 font-bold text-end'>Read more </div>
        </div>
        <div className='w-[56%] my-6' >
          <div className='flex flex-wrap justify-center gap-7'>
            <div className='icon_card child'>
              <div className=' flex justify-center'><img src='./icon1.png' alt='logind..'/></div>
              <div className='icon_text'>Social Media Management</div>
            </div>
            <div className='icon_card child'>
              <div className=' flex justify-center'><img src='./icon2.png' alt='logind..'/></div>
              <div className='icon_text'>Search Engine Optimization</div>
            </div>
            <div className='icon_card child'>
              <div className=' flex justify-center'><img src='./icon3.png' alt='logind..'/></div>
              <div className='icon_text'>Design</div>
            </div>
            <div className='icon_card child'>
              <div className=' flex justify-center'><img src='./icon4.png' alt='logind..'/></div>
              <div className='icon_text'>Ads</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
