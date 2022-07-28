import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <section className='container mx-auto pt-5'>
        <div className='flex justify-between item-center'>
            <div className='w-[183px] h-[68px] rounded-lg px-4 py-2 flex gap-3 items-center'>
                <div className='flex'>
                    <div className='mt-2 mx-2'><img src='./images/logoo.svg' width={40} alt='logo-error'/></div>
                    <div>
                        <div className='font-semibold text-[20px] font-Quicksand '>Agency</div>
                        <div>Creative</div>
                    </div>
                </div>
            </div>
            <div className=' links flex gap-10 pt-4 font-[400px] text-[18px] font-Quicksand'>
                <div className=''>
                    <Link href="/">
                        <a className='font-font-normal text-[18px] font-Quicksand'>Home</a>
                    </Link>
                </div>

                <div>
                    <Link href="#about">
                        <a className='font-font-normal text-[18px] font-Quicksand'>About</a>
                    </Link>
                </div>
                <div>
                    <Link href="#services">
                        <a className='font-font-normal text-[18px] font-Quicksand'>Services</a>
                    </Link>
                </div>
                <div >
                    <Link href="#project">
                        <a className='font-font-normal text-[18px] font-Quicksand'>Project</a>
                    </Link>
                </div>
            </div>
    
            <div >
                <Link href="#contact">
                    <button className='border border-sky-200 py-2 px-6 rounded-full'> <a>Contact us</a></button>
                </Link>
            </div>
        </div>
        </section>
    )
}

export default Header
