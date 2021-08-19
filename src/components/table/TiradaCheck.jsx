import React, { useContext, useState } from 'react'
import { SessionContext, useJugadas } from '../helper/Session';
import Checkbox from '@material-ui/core/Checkbox';

 const TiradaCheck = ({ index}) => {

  const [checked, setChecked ] = useState(false);
  const { jugadaEliminada, } = useJugadas()

  const handleChange = (event) => {
    event.preventDefault()
    if(event.target.checked){
      jugadaEliminada(index)
    }
    setChecked(!checked)
  }

    return (
    <>
      <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} /> 
    </>
  )
}
export default TiradaCheck;