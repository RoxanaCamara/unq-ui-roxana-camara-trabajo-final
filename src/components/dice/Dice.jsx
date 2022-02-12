import React, { useState } from "react";
import { Tooltip, Checkbox } from "@material-ui/core";
import { useDices } from "../helper/Session";
import "./style.css";

const Dice = ({ num, index }) => {
  const [checked, setChecked] = useState(true);
  const { changeValueIndexDice } = useDices();

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.checked) {
      changeValueIndexDice(index, num);
    } else {
      changeValueIndexDice(index);
    }
    setChecked(event.target.checked);
  };

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
        <Tooltip title="* Destilde el dado si quiere volver a tirarlo">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Tooltip>
      </div>
    </>
  );
};

export default Dice;
