import Link from 'next/link'

interface INavbar{
    page: string,
}

const MainFooter:React.FC<INavbar>=({page})=> {
    return (
        <div className='FooterContainer'>
        <div className='FooterNavLeft'>
            <h3>2024 Team three. All Rights Reserved</h3>
        </div>
        <div className='FooterNavCenter'>
            <div>
                <h1><Link href="/">Explore</Link></h1>
                <h3><Link href="/">Explore</Link></h3>
                <h3><Link href="/">Explore</Link></h3>
                <h3><Link href="/">Explore</Link></h3>
            </div>
            <div>
                <h1><Link href="/">Explore</Link></h1>
                <h3><Link href="/">Explore</Link></h3>
                <h3><Link href="/">Explore</Link></h3>
                <h3><Link href="/">Explore</Link></h3>
            </div>
            <div>
                <h1><Link href="/">Explore</Link></h1>
                <h3><Link href="/">Explore</Link></h3>
                <h3><Link href="/">Explore</Link></h3>
                <h3><Link href="/">Explore</Link></h3>
            </div>
            <div>
                <h1><Link href="/">Explore</Link></h1>
                <h3><Link href="/">Explore</Link></h3>
                <h3><Link href="/">Explore</Link></h3>
                <h3><Link href="/">Explore</Link></h3>
            </div>
        </div>
        <div className='FooterNavRight'>
            <div className='WhiteCircle w-8 h-8'></div>
        </div>
    </div>

    )
}

export default MainFooter;