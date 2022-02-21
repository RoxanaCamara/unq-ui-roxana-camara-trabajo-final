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

  

  const ordenarDados = () =>{
    let dados2 = dados
    dados2.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(dados2)
    return dados2
  }

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
            {ordenarDados(dados).map((d, index) => (
            <DiceAndCheck dado={d}
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