import React from 'react'
import { Grid } from '@material-ui/core';

import '../dice/Style.css'

export const Dice = ({ num }) => {
    console.log("num")
    console.log(num)
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
        </Grid> 
        </div>
        </>
    )
}
