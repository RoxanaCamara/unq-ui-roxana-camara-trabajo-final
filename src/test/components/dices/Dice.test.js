import React from 'react';
import { shallow } from 'enzyme';
import Dice from '../../../components/dice/Dice';


describe('Test del component <Dice/>', () => {

    test('Debemos testear cuando reciba un numero del 1 al 6', () => {
        const wrapper = shallow( <Dice num={ 4 } /> );
        expect( wrapper ).toMatchSnapshot();      
    })

    test('Debemos testear cuando reciba un numero mayor a 6', () => {
        const wrapper = shallow( <Dice num={ 8 } /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
})