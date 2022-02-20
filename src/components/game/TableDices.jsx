import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { Dices } from "../dice/Dices";
import { Oportunity } from "./Oportunity";
import { Jugadas } from "./Jugadas";
import { useDices } from "../helper/useDices";
import { SessionContext } from "../helper/Session";
import './style.css'


const TableDices = () => {
  const { state } = useContext(SessionContext);
  const { dados, finTurno, puntaje, oportunidades, eliminarJugada } = state;
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
          <Oportunity
            oportunidades={oportunidades}
            eliminarJugada={eliminarJugada}
            tirarDadosSeleccionados={tirarDadosSeleccionados}
          />
        )}
      </Grid>

      <Grid item>
        <Dices dados={dados} finTurno={finTurno} changeValueIndexDice={changeValueIndexDice} />
      </Grid>

      <Grid item>{!finTurno && <Jugadas jugadasDisponibles={puntaje} />}</Grid>
    </Grid>
  );
};
export default TableDices;