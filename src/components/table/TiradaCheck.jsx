import React, { useContext, useState } from 'react'
import { SessionContext } from '../helper/Session';
import Checkbox from '@material-ui/core/Checkbox';


 const TiradaCheck = ({tirada, index}) => {
  const { state } = useContext(SessionContext)
  const {  tiradas , eliminarTirada} = state
      const [checked, setChecked] = useState(false);

      const handleChange = (event) => {
        event.preventDefault()
        if(event.target.checked){
          tiradas[5].played = true
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