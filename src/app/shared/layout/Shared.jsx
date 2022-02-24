import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from '@material-ui/core';


///

export const StyledTableCell = withStyles((theme) => ({
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

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

