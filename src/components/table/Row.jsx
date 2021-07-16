import React, { useContext, useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { SessionContext } from '../helper/Session';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

export const RowTableGame = ({tirada, index}) => {

    const { state } = useContext(SessionContext)
    const {  tiradas, eliminarTirada } = state
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
  
      const handleChange = (event) => {
        event.preventDefault()
        if(event.target.checked){
          tiradas[index].played = true
        }
        setChecked(checked)
      };

      console.log( tirada.played)
      console.log(eliminarTirada)
      
    return (
        <div>
            { eliminarTirada &&   <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} /> } 
            { tirada.played && <FontAwesomeIcon icon={faBan} size="lg" /> }  
        </div>
    )
}
