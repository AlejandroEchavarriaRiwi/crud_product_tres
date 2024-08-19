'use client'

interface INavbar {
    page: string,
    onNavigate: (path: string) => void
}

const NavbarUser: React.FC<INavbar> = ({ page, onNavigate }) => {
    return (
        <div className='NavContainer'>
            <div className='NavLeft'>
                <div className='BlueCircle w-5 h-5'></div>
                <h1>
                    <span onClick={() => onNavigate('/')} style={{ cursor: 'pointer' }}>T3</span>
                </h1>
                <h2>{page}</h2>
            </div>
            <div className='NavRight'>
                <h2>Team three</h2>
                <div className='BlueCircle w-8 h-8'>T</div>
            </div>
        </div>
    )
}

export default NavbarUser