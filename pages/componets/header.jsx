import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import Test from '../test'
import { Links } from './hamburger'

function Header() {
    return (
        <section className='container mx-auto pt-5 main_header'>
            <div className='flex justify-between item-center items-center main_header1'>
                <div className=' rounded-lg px-4 py-2 flex gap-3 items-center'>
                    <div className='flex'>
                        <div className='mt-2 mx-2'><img src='./images/logoo.svg' width={40} alt='logo-error' /></div>
                        <div>
                            <div className='font-semibold text-[20px] font-Quicksand '>Agency</div>
                            <div>Creative</div>
                        </div>
                    </div>
                </div>
                <div className=' links flex gap-10 pt-4 font-[400px] text-[18px] font-Quicksand '>
                    <Links />
                </div>
                <div className='flex justify-center mt-6 '>
                    <Link href="mailto:main@gmail.com"><a ><button className='border border-[#377DFF] sm:px-6 text-[14px] px-3  py-2 rounded-full mx-6'>Contact us</button></a></Link>
                    <Test />
                </div>

            </div>


        </section>
    )
}

export default Header
