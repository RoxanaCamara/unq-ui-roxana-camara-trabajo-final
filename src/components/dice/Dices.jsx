import React from 'react';
import Dice from './Dice';
import './style.css'


export const Dices = ( { dados, finTurno, changeValueIndexDice } ) => {              
    return <div className="table_dices">
            {
                !finTurno &&
                dados.map((i, index) => (
                    <Dice num={i}
                        index={index}
                        key={index}
                        changeValueIndexDice={changeValueIndexDice}
                    />
                ))
            }      
    </div>;
};
