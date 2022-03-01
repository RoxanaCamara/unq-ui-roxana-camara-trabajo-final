import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { Oportunity } from "../game/Oportunity";
import { Jugadas } from "../game/Jugadas";
import { useDices } from "../../hooks/useDices";
import './style.css'
import DiceAndCheck from "./DiceAndCheck";
import { SessionContext } from "../../hooks/Session";


const TableDices = () => {
  const { state } = useContext(SessionContext);
  const { dados, finTurno, puntaje, oportunidades } = state;
  const { tirarDados, tirarDadosSeleccionados, changeValueIndexDice } = useDices();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"  xs={12}
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
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
        >

        {
          !finTurno &&
          <div className="table_dices">
            {dados.map((d, index) => (
            <DiceAndCheck 
              name={d.name} 
              num={d.num}            
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
    </Grid>
  );
};
export default TableDices;