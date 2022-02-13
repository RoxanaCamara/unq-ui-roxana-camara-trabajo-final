import React, { useContext, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Checkbox
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { SessionContext } from "../helper/Session";
import "../table/style.css";
import { useJugadas } from "../helper/useJugadas";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: "1rem",
    textAlign: "center",
    margin: "0px",
  },
  body: {
    textAlign: "center",
    fontSize: 14,
    padding: "0px",
    margin: "0px"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    width: "18rem",
    paddingBottom: "3px",
  },
}));

const TableScore = () => {
  const { state } = useContext(SessionContext);
  const { puntaje, eliminarJugada } = state;
  const { totalPuntaje, jugadaEliminada } = useJugadas();
  const classes = useStyles();
  const [checked, setChecked ] = useState(false);

  const handleChange = (index, e) => {
    e.preventDefault()
    if(e.target.checked){
      jugadaEliminada(index)
    }
    setChecked(!checked)
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
                  {eliminarJugada ? (
                    <Checkbox className='checkbox' checked={checked} onChange={e => handleChange(index, e)} /> 
                  ) : row.played ? (
                    <FontAwesomeIcon style={{margin: '0.7rem'}} icon={faBan} size="lg" />
                  ) : (
                    <FontAwesomeIcon style={{margin: '0.7rem'}} icon={faQuestion} size="lg" />
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <StyledTableRow>
              <StyledTableCell  component="th">
                <Box  style={{margin: '0.7rem'}} fontWeight="fontWeightBold" fontSize={15}>
                  Total
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center"  style={{margin: '0.7rem'}} >{totalPuntaje()}</StyledTableCell>
              <StyledTableCell align="center"  style={{margin: '0.7rem'}}>-</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableScore;
