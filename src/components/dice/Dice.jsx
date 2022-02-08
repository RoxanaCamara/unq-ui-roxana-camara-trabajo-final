import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { useDices } from '../helper/Session';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import '../dice/style.css'

const useStyles = makeStyles((theme) => ({
    fab: {
        
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));

const Dice = ({ num, index }) => {

    const classes = useStyles();
    const [checked, setChecked] = useState(true);
    const { changeValueIndexDice } = useDices();


    const handleChange = (event) => {
        event.preventDefault()
        if (event.target.checked) {
            changeValueIndexDice(index, num)
        }
        else {
            changeValueIndexDice(index)

        }
        setChecked(event.target.checked);
    };

    return (
        <>
            <div className="nono">
               
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
                    <Tooltip title="* Destilde el dado si quiere volver a tirarlo">                      
                            <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />                       
                    </Tooltip>
           
        </div>
        </>
    )
}

export default Dice;