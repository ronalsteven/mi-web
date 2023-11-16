import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../images/shopping-cart.png'; // Importa tu icono del carrito de compras

const Navbar = () => {
    return (
        <nav className="logo-nav">
            <Link to="/">
                <img className="logo" src="logo.png" alt="Logo de Clean Pets" />
            </Link>

            <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>

            <div className="cart-icon">
                <img src={shoppingCartIcon} alt="Icono de carrito de compras" />
            </div>
        </nav>
    );
}

export default Navbar;
