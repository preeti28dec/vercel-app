
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
</>)

export default HamburgerMenu