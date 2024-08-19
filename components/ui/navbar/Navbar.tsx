'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Cart from '../cart/cart';

const Navbar: React.FC = () => {
    const pathname = usePathname()

    const isLoginPage = pathname === '/login'

    return (
        <div className='NavContainer'>
            <div className='NavMainLeft'>
                <div className='BlueCircle w-5 h-5'></div>
                <h1><Link href="/">T3</Link></h1>
            </div>
            <div className='NavMainRight'>
                <h1><Link href="/">Home</Link></h1>
                <h1><Link href="/">About Us</Link></h1>
                {isLoginPage ? (
                    <Link href="/register"><div className='ButtonLogin'>Register</div></Link>
                ) : (
                    <Link href="/login"><div className='ButtonLogin'>Login</div></Link>
                )}
                <Cart/>
            </div>
        </div>
    )
}

export default Navbar;