import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { SessionContext, useJugadas } from '../helper/Session';
import TiradaCheck from './TiradaCheck';
import '../table/style.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: '1rem',
    textAlign: 'center',
    margin: '0px'
  },
  body: {
    textAlign: 'center',
    fontSize: 14,
    padding: '0.5rem',
    margin: '0px'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    width: '18rem',  
    paddingBottom: '3px'
  }
}))


const TableScore = () => {

  const { state } = useContext(SessionContext)
  const { puntaje, eliminarJugada } = state
  const { totalPuntaje } = useJugadas()
  const classes = useStyles();

  return (
    <div className={classes.table}>
    <TableContainer className='book'>
      <Table aria-label="customized table" >
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
              <StyledTableCell align="center">
                {row.valor}
              </StyledTableCell>
              <StyledTableCell align="center">
                {   
                eliminarJugada ?
                <TiradaCheck tirada={row} index={index} />                
                :                  
                    row.played ?
                    <FontAwesomeIcon icon={faBan} size="lg" />                     
                      :
                      <FontAwesomeIcon icon={faQuestion} size="lg" />

                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow >

            <StyledTableCell component="th">
              <Box fontWeight="fontWeightBold" fontSize={15}>
                Total
              </Box>
            </StyledTableCell>
            <StyledTableCell align="center">
              {totalPuntaje()}
            </StyledTableCell>
          </StyledTableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
export default TableScore;