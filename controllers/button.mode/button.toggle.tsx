'use client'
import { useState, useEffect } from 'react';


// definicion del componente funcional darkModeToogle
const DarkModeToggle = () => {
    // estado para controlar si el modo oscuro está activado o no
    const [darkMode, setDarkMode] = useState(false);

    // ganmcho useeffect para sincronizar el estado inicial con el almacenamiento local
    useEffect(() => {
        // lee el valor almacenado en localStorage para el modo oscuro
        const isDarkMode = localStorage.getItem('darkMode') === 'true';

        // establece el estado darkMode basado en el valor guardado
        setDarkMode(isDarkMode);

        // alternar la clase 'dark-mode' en el body del documento según el valor de `darkMode`
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, []); // El array vacío asegura que este efecto solo se ejecute al montar el componente

    // función para alternar el estado del modo oscuro
    const toggleDarkMode = () => {
        // cambiar el estado `darkMode` al valor opuesto
        `   `
        const newDarkMode = !darkMode;



        // actualiza el estado `darkMode` con el nuevo valor
        setDarkMode(newDarkMode);

        // Guardar el nuevo valor en localStorage
        localStorage.setItem('darkMode', newDarkMode.toString());

        // cambia la clase 'dark-mode' en el body del documento según el nuevo valor
        document.body.classList.toggle('dark-mode', newDarkMode);
    };

    // renderiza o muestra el componente
    return (
        <button
            onClick={toggleDarkMode} // se llama a `toogleDarkMode` cuando se haga clic en el botón
            className={`toggle-btn ${darkMode ? 'dark' : 'light'}`} // Aplicar clases CSS basadas en el estado `darkMode`
        >
            {/* esto es un emoji de vs correspondiente  en el estado `darkMode` */}
            {darkMode ? <svg width="20px" height="20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M785.334 194.943c174.789 174.787 174.789 459.179 0 633.967-174.787 174.787-459.178 174.787-633.967 0-13.206-13.205-26.22-28.336-39.807-46.314a19.672 19.672 0 0 1-2.223-20.012 19.777 19.777 0 0 1 16.54-11.442c98.838-6.698 191.601-48.753 261.234-118.386C530.853 489.014 546.472 258.475 423.392 96.51a19.553 19.553 0 0 1-2.249-19.981 19.554 19.554 0 0 1 16.54-11.497c129.587-8.759 256.325 38.583 347.651 129.911z" fill="#ffffff"></path><path d="M785.334 194.943c-14.266-14.268-29.484-27.325-45.354-39.399 151.302 175.925 143.723 442.269-22.987 608.98-121.85 121.85-307.044 190.195-461.161 142.154 60.038 35.511 140.886 47.603 167.101 50.984 129.417 13.067 263.464-29.816 362.401-128.753 174.789-174.787 174.789-459.179 0-633.966z" fill="#ffffff"></path></g></svg> : <svg width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" fill="#ffffff" />
                <g stroke="#ffffff" stroke-width="4">
                    <line x1="50" y1="15" x2="50" y2="5" />
                    <line x1="50" y1="95" x2="50" y2="85" />
                    <line x1="15" y1="50" x2="5" y2="50" />
                    <line x1="95" y1="50" x2="85" y2="50" />
                    <line x1="26" y1="26" x2="19" y2="19" />
                    <line x1="74" y1="74" x2="81" y2="81" />
                    <line x1="26" y1="74" x2="19" y2="81" />
                    <line x1="74" y1="26" x2="81" y2="19" />
                </g>
            </svg>}

        </button>
    );
};

// Exportar el componente para su uso en otras partes de la de la app
export default DarkModeToggle;
