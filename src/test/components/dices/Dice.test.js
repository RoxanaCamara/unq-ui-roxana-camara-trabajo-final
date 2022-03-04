import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Dice from '../../../app/components/dice/Dice';

describe('Test del component <Dice/>', () => {

    const wrapper = shallow( <Dice num={ 4 } />);

    test('Debemos testear cuando reciba un numero del 1 al 6', () => {
        
        //expect( wrapper ).toMatchSnapshot();  
        console.log(wrapper.html())
        const p = wrapper.find('#fourth-face');
        console.log(p)
        //expect( p.text().trim() ).toBe( title );
        
       
        //expect( className.includes('fourth-face') ).toBe( true ); 
    })

    test('Debemos testear cuando reciba un numero mayor a 6', () => {
        //const wrapper = shallow( <Dice num={ 8 } /> );
        /*const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('fourth-face') ).toBe( false );*/ 

    })
})