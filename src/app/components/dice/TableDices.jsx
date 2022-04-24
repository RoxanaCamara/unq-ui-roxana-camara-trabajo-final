import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { Oportunity } from "../game/Oportunity";
import { Jugadas } from "../game/Jugadas";
import { useDices } from "../../hooks/useDices";
import './style.css'
import DiceAndCheck from "./DiceAndCheck";
import { connect } from "react-redux";


const TableDices = () => {
  const { tirarDados, tirarDadosSeleccionados, changeValueIndexDice,
     dadosN, turno, oportunidades, puntaje } = useDices();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"  xs={12}
    >
      <Grid item>
        {turno ? (
          <button
            role="button"
            className="button-39"
            onClick={() => tirarDados()}
          >
            Tirar DadosN
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
          !turno &&
          <div className="table_dices">
            {dadosN.map((d, index) => (
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

const mapStateToProps = ({ jugada }) => ({
  /*dadosN: jugada.dadosN,*/
});

export default connect(mapStateToProps, null)(TableDices);