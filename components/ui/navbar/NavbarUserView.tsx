import Link from 'next/link'

interface INavbar{
    page: string,
}

const Navbar:React.FC<INavbar>=({page})=> {
    return (
            <div className='NavContainer'>
                <div className='NavLeft'>
                    <div className='BlueCircle w-5 h-5'></div>
                    <h1><Link href="/">T3</Link></h1>
                    <h2><Link href="/">{page}</Link></h2>
                </div>
                <div className='NavRight'>
                    <h2>Team three</h2>
                    <div className='BlueCircle w-8 h-8'>T</div>
                </div>
            </div>

    )
}

export default Navbar;