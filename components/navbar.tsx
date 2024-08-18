'use client'
import DarkModeToggle from '../controllers/button.mode/button.toggle'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
const NavStyled = styled.nav`
    display: sticky;
    position: fixed;
    z-index: 1000;
    width: 40%;
    height: 60px;
    top: 10px;
    left: 30%;
    border-radius: 85px 10%;
    overflow: hidden;
    text-decoration: none;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: rgba(0, 166, 77, 0.9);
    box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.75);
}

li {
    margin: 30px;
    text-decoration: none;
    display: flex;
    gap: 30px;
}


a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: White
}

a:hover {
    color: #9ce9de
}
    `
export default function Navbar() {
    return (
        <NavStyled>
            <li>
                <Image
                    src="/logo.png"
                    width={50}height={50}
                    alt="Logo"
                />
                <Link href="/">Inicio</Link>
                <Link href="/tablePage">Productos</Link>
                <Link href="/form">Nuevo Producto</Link>
            </li>
            {/* <DarkModeToggle /> */}
        </NavStyled>

    )
}