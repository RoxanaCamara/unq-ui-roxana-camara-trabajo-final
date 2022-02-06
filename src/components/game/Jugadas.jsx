import React from 'react';
import { ButonTirada } from './ButonTirada';


export const Jugadas = (props) => {
    const {jugadasDisponibles} = props
    return <div>
        {
            jugadasDisponibles.map((elem, index) =>
                <ButonTirada yaSeJugo={elem.played} nombreTirada={elem.name} index={index}
                />
            )
        }
    </div>;
};
