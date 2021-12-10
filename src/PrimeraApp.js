// FC - Funtional Components

import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { titulo, subtitulo } ) => {

    // if ( !titulo ){
    //     throw new Error("El titulo es necesario");
    // }

    return (
        <>
            <h1>{ titulo }</h1>
            {/* <pre> { JSON.stringify( titulo, null, 3 ) } </pre> */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    titulo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp; 