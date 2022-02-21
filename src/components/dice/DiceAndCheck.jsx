import React, { useState } from "react";
import { Tooltip, Checkbox } from "@material-ui/core";
import Dice from "./Dice";
import "./style.css";

const DiceAndCheck = ({ num, index, oportunidades, changeValueIndexDice }) => {

    const [checked, setChecked] = useState(false);

    const handleChange = (index) => {
        changeValueIndexDice(index);
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
                        onChange={() => handleChange(index)}
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />
                </Tooltip>
            }

        </>
    )
}
export default DiceAndCheck;