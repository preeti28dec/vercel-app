import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <section className='pt-[60px]'>
      <div className='grid justify-items-center'> 
        <div className='home_text font-Nunito font-extrabold text-center text-[#1D1D1DD] text-[64px] max-w-[780px] max-auto'>Make your dream business goal come true</div>
        <div className='mt-4 sm:mt-12 mx-2 font-Nunito opacity-[0.6] font-normal text-[#464646] text-center text-[16px] sm:py-2 sm:text-[20px] max-w-[780px] max-auto'>when you need us for improve your business,then come with us to help your business have reach it, you just sit and feel that goal</div>
      </div>
      <div className='text-center mt-10'>
        <button className='bg-blue-500 text-white py-2 px-8 rounded-full'>Start Project</button>
      </div>
      <div className='w-[fit-content] mx-auto relative'>
        <span className='home_1rd_card w-[fit-content] mx-auto bg-white py-5 px-4 rounded-2xl shadow-lg absolute z-10 top-36 left-[-120px]'>
          <div className='flex my-2'><img src='./Vector.png' alt='loding..' /> <span className='mx-4 font-Quicsand font-bold text-lg opacity-50 text-[#1D1D1D]'>GREAT PROJECT</span></div>
          <div className='flex gap-1 items-center my-2'><p className='text-[24px] font-extrabold'>800+</p><p className='text-[24px] font-semibold'>DONE</p></div>
        </span>
        <div className=''><img className="mx-auto  py-10 px-6 sm:py-20 sm:px-6" src='./home_img.png' alt='home_img_error' /></div>
        <span className='home_3rd_card w-[fit-content] mx-auto bg-white py-5 px-7 rounded-2xl shadow-lg absolute z-10 bottom-24 right-[-100px]'>
          <div className='flex'>
            <div className='mt-2 mx-2'><img src='./Pepople.png' width={40} alt='logo-error' /></div>
            <div>
              <div>Agency</div>
              <div>Creative</div>
            </div>
          </div>
          <div className='mt-4 w-[125px] text-[10px] text-left'> This team is really the best in its field I don't regret working with them and will come back again thanks </div>
        </span>
      </div>

    </section>
  )
}

export default HomePage
