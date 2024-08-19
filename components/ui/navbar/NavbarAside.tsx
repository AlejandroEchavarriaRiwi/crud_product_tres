import Link from "next/link";

const NavbarAside: React.FC = () => {
    return (
        <div className="NavBarAsideContainer">
            <div className="MenuContainer">
            <h1><Link href="/dashboard">Home</Link></h1>
            <h1><Link href="/dashboard/addproducts">New</Link></h1>
            </div>
        </div>
    )
}
export default NavbarAside;