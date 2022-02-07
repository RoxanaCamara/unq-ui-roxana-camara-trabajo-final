import React from 'react';
import { ButonTirada } from './ButonTirada';
import '../game/style.css'


export const Jugadas = (props) => {
    const {jugadasDisponibles} = props
    return <div>
        {
            jugadasDisponibles.map((elem, index) =>
                <ButonTirada className="sombras" yaSeJugo={elem.played} nombreTirada={elem.name} index={index}
                />
            )
        }
    </div>;
};
