import React from 'react';
import { Grid } from '@material-ui/core';
import TableScore from '../table/Table';
import TableDices from '../game/TableDices';
import EndGameModal from '../game/EndGame';
import { Contenedor } from '../nav/Contenedor';

const Solitarie = () => {
  return (
    <Contenedor>
      <Grid container xs={12} direction="row">
        <Grid item sm={5}>
          <TableScore />
        </Grid>

        <Grid item sm={7}>
          <TableDices />
        </Grid>

        <EndGameModal />
      </Grid>
    </Contenedor>
  )
}
export default Solitarie;