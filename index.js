// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './src/componentes/Navbar'; // Aquí es donde importas tu componente Navbar
// Importa tus otros componentes de página aquí

const App = () => {
    return (
        <Router>
            <Navbar /> // Aquí es donde usas tu componente Navbar

            <Switch>
                <Route path="/inicio">
                    {/* Tu componente de inicio aquí */}
                </Route>

                <Route path="/productos">
                    {/* Tu componente de productos aquí */}
                </Route>

                {/* Haz lo mismo para tus otras rutas */}
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
