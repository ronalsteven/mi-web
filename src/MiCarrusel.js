import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos necesarios

// Importa las imágenes
import imagen1 from './images/imagen1.jpg';
import imagen2 from './images/imagen2.jpg';
import imagen3 from './images/imagen3.jpg';


function MiCarrusel() {
    return (
        <Carousel>
            <div>
                <img src={imagen1} />
                <p className="legend">Leyenda de la imagen 1</p>
            </div>
            <div>
                <img src={imagen2} />
                <p className="legend">Leyenda de la imagen 2</p>
            </div>
            <div>
                <img src={imagen3} />
                <p className="legend">Leyenda de la imagen 3</p>
            </div>
        </Carousel>
    );
}

export default MiCarrusel;
