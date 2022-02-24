import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Tooltip, Checkbox } from "@material-ui/core";
import Dice from "./Dice";
import "./style.css";

const DiceAndCheck = ({ name, num, oportunidades, changeValueIndexDice }) => {

    const [checked, setChecked] = useState(false);

    const handleChange = (name) => {
        changeValueIndexDice(name);
        setChecked(!checked)
    };

    return (
        <>
            <Dice num={num} />
            {
                oportunidades < 3 &&

                <Tooltip title="* Marque el dado que no quiere volver a tirar">
                    <Checkbox
                        checked={checked}
                        onChange={() => handleChange(name)}
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />
                </Tooltip>
            }

        </>
    )
}

DiceAndCheck.propTypes = {
    name: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    oportunidades: PropTypes.number.isRequired,
    changeValueIndexDice: PropTypes.func.isRequired
};
export default DiceAndCheck;