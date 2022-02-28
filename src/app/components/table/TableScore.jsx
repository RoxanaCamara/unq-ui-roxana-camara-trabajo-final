import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Checkbox
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faQuestion, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { StyledTableCell, StyledTableRow } from "../../shared/layout/Shared";
import { SessionContext } from "../../hooks/Session";
import { useJugadas } from "../../hooks/useJugadas";

export const useStyles = makeStyles((theme) => ({
  table: {
    width: "18rem",
  },
}));

const TableScore = () => {
  const { state } = useContext(SessionContext);
  const { puntaje, oportunidades } = state;
  const { jugadaEliminada } = useJugadas();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);


  const segunTipoDeJugada = (status) => {
    switch (status) {
      case "ANULADO":
        return <FontAwesomeIcon style={{ margin: '0.7rem' }} icon={faBan} size="lg" />
      case "JUGADO":
        return <FontAwesomeIcon style={{ margin: '0.7rem' }} icon={faCheckCircle} size="lg" />
      default:
        return <FontAwesomeIcon style={{ margin: '0.7rem' }} icon={faQuestion} size="lg" />
    }
  }

  return (
    <div className={classes.table}>
      <TableContainer className="book">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Jugada</StyledTableCell>
              <StyledTableCell align="center">Puntaje</StyledTableCell>
              <StyledTableCell align="center">Anular</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {puntaje.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.valor}</StyledTableCell>
                <StyledTableCell align="center">
                  { oportunidades == 3 && row.played == '' ?
                    <Checkbox className='checkbox' checked={checked} onChange={() => jugadaEliminada(index)} />
                    :
                    segunTipoDeJugada(row.played)
                  }
                </StyledTableCell>
              </StyledTableRow>
            ))}            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableScore;
