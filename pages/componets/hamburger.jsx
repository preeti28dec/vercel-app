
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'
import { slide as Menu } from 'react-burger-menu'
const HamburgerMenu = () => (
    <div className='p-2 '>
        <Menu customBurgerIcon={<AiOutlineMenu />} width={'auto'} className='left-0 top-12' >
            <Links />
        </Menu>
    </div>
)
export const Links = () => (<>
    <div className=''>
        <Link href="/" className='font-font-normal text-[18px] font-Quicksand'>
            Home
        </Link>
    </div>

    <div>
        <Link href="#about" className='font-font-normal text-[18px] font-Quicksand'>
            About
        </Link>
    </div>
    <div>
        <Link href="#services" className='font-font-normal text-[18px] font-Quicksand' >
            Services
        </Link>
    </div>
    <div >
        <Link href="#project" className='font-font-normal text-[18px] font-Quicksand' >
            Project
        </Link>
    </div>
</>)

export default HamburgerMenu