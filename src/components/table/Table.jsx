import React, { useContext, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { SessionContext } from '../helper/Session';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TiradaCheck from './TiradaCheck';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles  = makeStyles((theme) => ({
  table: {
    maxWidth: 400,
  }
}))

const TableGame = () => {
    
  const { state } = useContext(SessionContext)
  const {  tiradas , eliminarTirada} = state
  const classes = useStyles();
  
  return (
    <TableContainer  >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Jugada</StyledTableCell>
            <StyledTableCell align="right">Puntaje</StyledTableCell>
           { eliminarTirada && <StyledTableCell align="right">Eliminar</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {tiradas.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name} 
              </StyledTableCell>
              <StyledTableCell align="right">
            {  row.played && row.value== 0 ?
            <FontAwesomeIcon icon={faBan} size="lg" />
            :
            row.value
            }  
              </StyledTableCell>
             { 
             eliminarTirada && <StyledTableCell align="right">
             <TiradaCheck tirada={row} index={index} />
               </StyledTableCell>
            }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableGame;