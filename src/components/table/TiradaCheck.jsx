import React, { useContext, useState } from 'react'
import { SessionContext, useTiradas } from '../helper/Session';
import Checkbox from '@material-ui/core/Checkbox';

 const TiradaCheck = ({tirada, index}) => {
  const { state, actions } = useContext(SessionContext)
  const {  tiradas , eliminarTirada } = state
  const { seteliminarTirada, settiradas } = actions
  const [checked, setChecked ] = useState(false);
  const { reinicio } = useTiradas()

  const handleChange = (event) => {
    event.preventDefault()
    if(event.target.checked){
      tiradas[index].played = true
      seteliminarTirada(false)
      reinicio()
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