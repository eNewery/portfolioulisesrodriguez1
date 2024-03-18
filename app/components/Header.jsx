"use client"
import React, {useEffect} from "react";
const Header = ({setIsNavbar, isNavbar}) => {
    function setNavbar() {
        const navbar = document.querySelector(".navbarContainer")
        if (isNavbar === true) {
            navbar.style.animation = "navbarDiss 1s both"
            setTimeout(() => {
                setIsNavbar(false)
            }, 1000);
        }
        if(isNavbar === false){
            setIsNavbar(true)
        }
    }
    useEffect(() => {
        
        function handleScroll() {
            const scrollYPosition = window.scrollY;
            console.log('Scroll-y position:', scrollYPosition);

            // Seleccionar el elemento headerContainer del DOM
            const headerContainer = document.querySelector('.headerContainer');

            // Verificar si la posición de desplazamiento es mayor que 1
            if (scrollYPosition > 1) {
                // Cambiar los estilos cuando la posición de desplazamiento es mayor que 1
                headerContainer.style.backgroundColor = 'white';
                headerContainer.style.borderBottom = '2px solid #F3F3F3';
            } else {
                // Restaurar los estilos originales cuando la posición de desplazamiento es menor o igual a 1
                headerContainer.style.backgroundColor = ''; // Restaurar al valor por defecto
                headerContainer.style.borderBottom = ''; // Restaurar al valor por defecto
            }
        }

        // Agregar el event listener al montar el componente
        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Dependencia vacía para que se ejecute solo una vez al montar el componente
    return(
    <div className="headerContainer">
        <div className="headerTitleContainer"><h1 className="headerTitle">ULISES RODRIGUEZ</h1></div>
        <div onClick={() => setNavbar()} className="burgerMenuContainer"><img className="burgerMenu" src="./burgerMenu.png" alt="" /></div>
    </div>
)
}

export default Header;