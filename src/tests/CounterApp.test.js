import React from "react";
import { shallow } from 'enzyme';
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );

    })

    test('Debe de mostrar correctamente <CounterApp /> y sus valores por defecto', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={ 100 }/>);
        const textoValue = wrapper.find('h2').text().trim();
        expect( textoValue ).toBe( '100' );
    });


    test('Debe de incrementar con el boton +1', () => {
        
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');

    });

    test('Debe de decrementar con el boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
        
    });

    test('Debe de restablecer el counter con el btn reset', () => {
        
        const wrapper = shallow(<CounterApp value={ 105 }/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        
        expect( counterText ).toBe('105');
    })
    
    
});