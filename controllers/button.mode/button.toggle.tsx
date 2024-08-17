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
            {darkMode ? '🌜' : '🌞'}
        </button>
    );
};

// Exportar el componente para su uso en otras partes de la de la app
export default DarkModeToggle;
