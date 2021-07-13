import React from 'react'
import '../dice/Style.css'

export const Dice = () => {

    return (
        <>
        <div class="nono"> 
            <div class="first-face">
                <span class="pip"></span>
            </div>
            <div class="second-face">
                <span class="pip"></span>
                <span class="pip"></span>
            </div>
            <div class="third-face">
                <span class="pip"></span>
                <span class="pip"></span>
                <span class="pip"></span>
            </div>
            <div class="fourth-face">
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
            </div>
            <div class="fifth-face">
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                <div class="column">
                    <span class="pip"></span>
                </div>
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
            </div>
            <div class="sixth-face">
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
            </div>
            </div>
        </>
    )
}
