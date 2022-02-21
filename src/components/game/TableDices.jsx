import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { Oportunity } from "./Oportunity";
import { Jugadas } from "./Jugadas";
import { useDices } from "../helper/useDices";
import { SessionContext } from "../helper/Session";
import './style.css'
import DiceAndCheck from "../dice/DiceAndCheck";


const TableDices = () => {
  const { state } = useContext(SessionContext);
  const { dados, finTurno, puntaje, oportunidades } = state;
  const { tirarDados, tirarDadosSeleccionados, changeValueIndexDice } = useDices();

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      <Grid item>
        {finTurno ? (
          <button
            role="button"
            className="button-39"
            onClick={() => tirarDados()}
          >
            Tirar Dados
          </button>
        ) : (
          <>
            <Oportunity
              oportunidades={oportunidades}
              tirarDadosSeleccionados={tirarDadosSeleccionados}
            />
            <Jugadas jugadasDisponibles={puntaje} />
          </>
        )}
      </Grid>

      <Grid item>
        {
          !finTurno &&
          <div className="table_dices">
            {dados.map((d, index) => (
            <DiceAndCheck num={d.num}
              index={index}
              key={index}
              oportunidades={oportunidades}
              changeValueIndexDice={changeValueIndexDice}
            />
          ))}
          </div>          
        }
      </Grid>
    </Grid>
  );
};
export default TableDices;