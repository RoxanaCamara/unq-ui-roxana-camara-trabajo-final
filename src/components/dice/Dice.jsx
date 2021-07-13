import React from 'react'
import "../dice/style.css"
import "../dice/animation.js"

export const Dice = () => {
  return (
    <>
      <div className="box">
        <div className="dice">
          <div className="side one">
            <div className="container">
              <div className="circle"></div>
            </div>
          </div>
          <div className="side two">
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="side three">
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="side four">
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="side five">
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="container">
              <div className="circle"></div>
            </div>
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="side six">
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <i className="fas fa-dice" onclick="roll()"></i>
    </>
  )
}
