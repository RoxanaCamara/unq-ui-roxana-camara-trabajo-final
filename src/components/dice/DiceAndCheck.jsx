import React, { useState } from "react";
import { Tooltip, Checkbox } from "@material-ui/core";
import Dice from "./Dice";
import "./style.css";

const DiceAndCheck = ({ dado, oportunidades, changeValueIndexDice }) => {

    const [checked, setChecked] = useState(false);

    const handleChange = (name) => {
        changeValueIndexDice(name);
        setChecked(!checked)
    };

    return (
        <>
            <Dice num={dado.num} />
            {
                oportunidades < 3 &&

                <Tooltip title="* Marque el dado que no quiere volver a tirar">
                    <Checkbox
                        checked={checked}
                        onChange={() => handleChange(dado.name)}
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />
                </Tooltip>
            }

        </>
    )
}
export default DiceAndCheck;