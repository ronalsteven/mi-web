// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './src/componentes/Navbar'; // Aquí es donde importas tu componente Navbar
import Inicio from './src/componentes/Inicio'; // Importa tu componente Inicio aquí
import MiCarrusel from './src/componentes/MiCarrusel'; // Importa tu componente MiCarrusel aquí
import shoppingCartIcon from './images/shopping-cart.png'; // Importa tu icono del carrito de compras

const App = () => {
    return (
        <Router>
            <Navbar /> // Aquí es donde usas tu componente Navbar

            <Switch>
                <Route path="/inicio">
                    <Inicio /> // Tu componente de inicio aquí
                </Route>

                {/* Haz lo mismo para tus otras rutas */}
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
