import React from 'react'

export const BotonTipoDeTirada = ({ num }) => {

    const { state, actions } = useContext(SessionContext)
    const { dadosValor } = state

    //setea en tiradas el vlaor de la jugada solo y su numero
    const handleSolo = (num) => {
        let newTirada = tiradas
        let n = num - 1
        let cant = cantidadDeRepetidos(num)
        let valor = cant * num
        newTirada[n].value = valor
        settiradas(newTirada)
        reinicio()
    }

    return (
        <div>
            {
            jugado &&
            <Button variant="contained" color="primary" key={index} onClick={e => { handleSolo(i) }} >{name} </Button>
            }
        </div>
    )
}
