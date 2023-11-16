import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './src/componentes/Navbar';
import Inicio from './src/componentes/Inicio';
import MiCarrusel from './src/componentes/MiCarrusel';
import shoppingCartIcon from './src/images/shopping-cart.png';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/inicio">
                    <Inicio />
                </Route>
                {/* Agrega otras rutas según sea necesario */}
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
