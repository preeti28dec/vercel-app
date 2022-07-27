import React from 'react'

function Portfolio() {
  return (
    <div className='container mx-auto py-20 px-6' id='portfolio'>
      <div className='text-center text-blue-500 text-2xl font-semibold'>Our Portfolio</div>
      <div className='text-7xl font-bold text-center my-4'>What do we do </div>
      <div className='flex justify-between'>
      <div className='text-center font-normal text-2xl max-w-[800px] mx-auto text-[#464646] my-16 font-Quicksand'>all projects that we have already done , proven can help to use more comfortable, then can used by client from our business</div>
      <div className='dots_img'><img src='./dots_img.png' alt='loding..'></img></div>
      </div>
      

      <div className='portfolio flex items-center gap-16'>
        <div className='images'><img src='./portfolio1.png' alt='loding image....' /><span className='relative bottom-12 left-6 text-[#fff] font-bold text-2xl'>Design Byte App</span> </div>
        <div className='py-1 images'><img src='./portfolio2.png' alt='loding image....' /><span className='relative bottom-12 left-6 text-[#fff] font-bold text-2xl'>Cloud App</span></div>
        <div className=' images'><img src='./portfolio3.png' alt='loding image....' /><span className='relative bottom-12 left-6 text-[#fff] font-bold text-2xl'>Design Furniture App</span></div>
      </div>

      <div className='text-center'>      
       <button className='border border-blue-500 py-2 px-8 rounded-full' id='portfolio'> <a className='text-blue-500'>See All Portfolio</a></button>
      </div>
    </div>
  )
}

export default Portfolio
