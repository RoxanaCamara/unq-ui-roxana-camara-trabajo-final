import React, { useContext, useState } from 'react'
import { Grid } from '@material-ui/core';
import '../dice/style.css'
import Checkbox from '@material-ui/core/Checkbox';
import { SessionContext } from '../helper/Session';


export const Dice = ({ num, index }) => {

    const { actions, state } = useContext(SessionContext)
    const { dadosGuardados } = state
    const { setDadosGuardados } = actions
    const [checked, setChecked] = useState(false);


    const handleChange = (event) => {
      let tem = [...dadosGuardados]
      if(event.target.checked){
          tem[index] = num
      }
      else{
        tem[index] = 0
      }
      setChecked(event.target.checked);
      setDadosGuardados(tem)
    };
    return (
        <>
        <div className="nono">
        <Grid item xs={4}>
        {
            num == 1 &&
            <div className="first-face">
                <span className="pip"></span>
            </div>
        }
        {
            num == 2 &&
            <div className="second-face">
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
        }
        {
            num == 3 &&
            <div className="third-face">
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
        }
        {
            num == 4 &&
            <div className="fourth-face">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div>
        }
        {
            num == 5 &&
            <div className="fifth-face">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div>
        }
        {
            num == 6 &&
            <div className="sixth-face">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div>
        }
        <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />  
        </Grid> 
        </div>
        </>
    )
}
