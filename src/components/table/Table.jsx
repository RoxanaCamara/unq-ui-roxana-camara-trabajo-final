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
import { SessionContext } from "../helper/Session";
import "../table/style.css";
import { useJugadas } from "../helper/useJugadas";
import { StyledTableCell, StyledTableRow } from "../shared/layout/Shared";

export const useStyles = makeStyles((theme) => ({
  table: {
    width: "18rem",
    paddingBottom: "3px",
  },
}));

const TableScore = () => {
  const { state } = useContext(SessionContext);
  const { puntaje, oportunidades } = state;
  const { totalPuntaje, jugadaEliminada } = useJugadas();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = (index, e) => {
    e.preventDefault()    
    jugadaEliminada(index)
   }

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
                    <Checkbox className='checkbox' checked={checked} onChange={e => handleChange(index, e)} />
                    :
                    segunTipoDeJugada(row.played)
                  }
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <StyledTableRow>
              <StyledTableCell component="th">
                <Box style={{ margin: '0.7rem' }} fontWeight="fontWeightBold" fontSize={15}>
                  Total
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center" style={{ margin: '0.7rem' }} >{totalPuntaje()}</StyledTableCell>
              <StyledTableCell align="center" style={{ margin: '0.7rem' }}>-</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableScore;
