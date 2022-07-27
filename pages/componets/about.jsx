import React from 'react'

function About() {
  return (
    <div className='container mx-auto my-15 py-15 px-6' id='about'>
      <div className='text-center text-blue-500 mb-10 font-samibold text-2xl font-Quicksand '>About Us</div>
      <div className='text-center mb-10 font-bold text-6xl'>Our Teammate</div>
      <div className='main_about'>
      <div className='w-[42%] text-center relative'> <img src='./about_us_img.png' alt='about us is img not loding..' /></div>
        <div className='w-1/2 pl-10'>
          <div className='font-Quicksand text-[20px] text-[#464646] '>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div>
          <div className='mt-6 about_text'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div>
          <div className='flex gap-[20px] mt-6 '>
            <div><button className='bg-[#377DFF] px-6 py-2 rounded-full text-white '>About Us</button></div>
            <div><button className='border border-[#377DFF] px-6 py-2 rounded-full mx-6'>Our Story</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
