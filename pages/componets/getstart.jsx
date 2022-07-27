import React from 'react'

function Getstart() {
  return (
    <div className="container mx-auto my-20 py-20 px-6" id='getstart'>
     <div className='flex justify-between '>
     <div className='max-w-[44%] '>
        <div className='text-[55px] text-[#1D1D1D] font-bold my-5'>Interesting Collaboration With Us?</div>
        <div className='text-xl text-[#464646] '>Help you to reach your business goal</div>
        <div className='my-6'><button className='bg-[#377DFF] px-6 py-2 rounded-full text-white '>Get Started</button></div>
     </div>
      <div className=' flex '> 
        <div className='relative left-8 top-24'><img src='./office1.png' alt='loding..'/></div>
        <div><img src='./office2.png' alt='loding..'/></div>
      </div>
     </div>
    </div>
  )
}

export default Getstart
