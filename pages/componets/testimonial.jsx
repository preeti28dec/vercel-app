import React from 'react'

function Testimonial() {
    return (
        <div className='container mx-auto my-20 px-6'>
            <div className='font-Quicksand font-semibold text-2xl text-[#377DFF] text-center '>Testimonial</div>
            <div className='flex'>
                <div className='dots_img'><img src='./blue_dots.png' alt='loding..'></img></div>
                <div className='font-bold text-[#1D1D1D] text-6xl text-center my-12 ml-36'>People Talk about us</div>
            </div>

            <div className='flex gap-10 flex-wrap'>
                <div className='shadow-lg rounded-2xl max-w-[370px] max-h-[340px] px-10 py-16 bg-white child '>
                    <div className='flex items-center gap-5'>
                        <div className=''><img src='./pepople.png' width={80} alt='logo-error' /></div>
                        <div className='my-6 mx-4'>
                            <div className='text-xl font-semibold text-[#377DFF]'>Angel Rose</div>
                            <div className=' text-[#464646] text-xs font-Quicksand'>Creative Manager</div>
                        </div>
                    </div>
                    <div className='text-[#464646] font-normal text-lg mt-4 font-Quicksand'>There are many variations passages of Lorem Ipsum majority some by words which dont look . </div>
                </div>
                <div className='shadow-lg rounded-2xl max-w-[370px] max-h-[340px] px-10 py-16 bg-white child '>
                    <div className='flex items-center gap-5'>
                        <div className=''><img src='./pepople.png' width={80} alt='logo-error' /></div>
                        <div className='my-6 mx-4'>
                            <div className='text-xl font-semibold text-[#377DFF]'>Angel Rose</div>
                            <div className=' text-[#464646] text-xs font-Quicksand'>Creative Manager</div>
                        </div>
                    </div>
                    <div className='text-[#464646] font-normal text-lg mt-4 font-Quicksand'>There are many variations passages of Lorem Ipsum majority some by words which dont look . </div>
                </div>
                <div className='shadow-lg rounded-2xl max-w-[370px] max-h-[340px] px-10 py-16 bg-white child '>
                    <div className='flex items-center gap-5'>
                        <div className=''><img src='./pepople.png' width={80} alt='logo-error' /></div>
                        <div className='my-6 mx-4'>
                            <div className='text-xl font-semibold text-[#377DFF]'>Angel Rose</div>
                            <div className=' text-[#464646] text-xs font-Quicksand'>Creative Manager</div>
                        </div>
                    </div>
                    <div className='text-[#464646] font-normal text-lg mt-4 font-Quicksand'>There are many variations passages of Lorem Ipsum majority some by words which dont look . </div>
                    <div className='blue_dots_image'><img className='blue_dots' src='./blue_dots.png' alt='loding...'/></div>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonial
