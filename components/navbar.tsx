'use client'
import './styles.css'
import DarkModeToggle from '../controllers/button.mode/button.toggle'

export default function Navbar() {
    return (
        <nav>
            <li>
                <a href="/">Inicio</a>
                <a href="/tablePage">Productos</a>
                <a href="/form">Nuevo Producto</a>
            </li>
            <DarkModeToggle />
        </nav>

    )
}