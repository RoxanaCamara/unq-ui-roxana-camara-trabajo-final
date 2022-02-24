import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const Dice = ({ num }) => {
  return (
    <>
      <div className="nono">
        {num == 1 && (
          <div className="first-face">
            <span className="pip"></span>
          </div>
        )}
        {num == 2 && (
          <div className="second-face">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        )}
        {num == 3 && (
          <div className="third-face">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        )}
        {num == 4 && (
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
        )}
        {num == 5 && (
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
        )}
        {num == 6 && (
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
        )}
      </div>
    </>
  );
};


Dice.propTypes = {
  num: PropTypes.number.isRequired,
};

export default Dice;
