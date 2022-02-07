import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { SessionContext, useJugadas } from '../helper/Session';

export const ButonTirada = ({ yaSeJugo, nombreTirada, index }) => {

  const { usarTirada, saberPuntaje, existeAlgunaJugada } = useJugadas()
  let puntaje = saberPuntaje(nombreTirada)
  let esUnaJugadaPosible = !yaSeJugo && puntaje > 0
  existeAlgunaJugada(esUnaJugadaPosible)

  return (
    <>
      {
       esUnaJugadaPosible && 
        <Button variant="contained" color="primary" onClick={ () => usarTirada(index, puntaje) } >{nombreTirada}</Button>
      }
    </>
  )
}
