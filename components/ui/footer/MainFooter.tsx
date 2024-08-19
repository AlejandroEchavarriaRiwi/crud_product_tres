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
                <h1>Explore</h1>
                <h3><Link href="/">Home</Link></h3>
                <h3><Link href="/">About us</Link></h3>
            </div>
            <div>
                <h1>Visit</h1>
                <h3>Guayabal</h3>
                <h3>Cl. 16 #55-129</h3>
            </div>
            <div>
                <h1>Follow us</h1>
                <h3><Link href="http://www.instagram.com">Instagram</Link></h3>
                <h3><Link href="http://www.facebook.com">Explore</Link></h3>
            </div>
            <div>
                <h1>Legal</h1>
                <h3><Link href="/">Term</Link></h3>
                <h3><Link href="/">Privacy</Link></h3>
            </div>
        </div>
        <div className='FooterNavRight'>
            <div className='WhiteCircle w-8 h-8'><div className='triangle'></div></div>
        </div>
    </div>

    )
}

export default MainFooter;