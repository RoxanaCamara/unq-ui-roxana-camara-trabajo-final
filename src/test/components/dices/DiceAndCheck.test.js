import React from 'react';
import { shallow } from 'enzyme';
import DiceAndCheck from '../../../components/dice/DiceAndCheck';

describe('Pruebas en <DiceAndCheck />', () => {

    const number = 3;
    const functionMock   = '';
    const wrapper = shallow( <DiceAndCheck name={ number } num={ number } oportunidades={ number } changeValueIndexDice={ functionMock } /> );

    
    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();

        ///checkear que existan:
        //Dice
        //Tooltip
        //Checkbox
    })

    test('Oportunidades es menor a 3 Checkbox se ve Checkbox y Tooltip ', () => {        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('Oportunidades es mayor a 3 Checkbox NO se ve Checkbox y Tooltip ', () => {        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('se llamo a changeValueIndexDice', () => {        
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe( true );

    })
    
    
    
    

})
