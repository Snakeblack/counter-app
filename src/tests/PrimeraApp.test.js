import React from "react";
import { shallow } from 'enzyme';
// import { render } from "@testing-library/react";

import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Bienvenido" ', () => {    
    //     const titulo = 'Bienvenidos';
    //     const { getByText } = render( <PrimeraApp titulo={ titulo } /> );
    //     expect( getByText( titulo ) ).toBeInTheDocument();
    // });
    
    test('Debe demostrar <PrimeraApp /> correctamente', () => {
        
        const titulo = 'Bienvenido';
        const wrapper = shallow( <PrimeraApp titulo= { titulo }/> );

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const titulo = 'Bienvenido';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                titulo= { titulo }
                subtitulo={ subTitulo }
            /> 
        );
        
        const textoParrafo = wrapper.find('p').text();
            
        expect( textoParrafo ).toBe( subTitulo );

    })
    

});