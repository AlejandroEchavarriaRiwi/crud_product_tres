import './styles.css'

export default function Navbar(){
    return(
        <nav>
            <li>
                <a href="/">Inicio</a>
                <a href="/tablePage">Productos</a>
                <a href="/form">Nuevo Producto</a>
            </li>
        </nav>
    )
}