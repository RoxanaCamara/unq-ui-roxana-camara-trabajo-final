import React from 'react';
import { Grid } from '@material-ui/core';
import EndGameModal from '../game/EndGame';
import { Contenedor } from '../nav/Contenedor';
import TableScore from '../table/TableScore';
import TableDices from '../dice/TableDices';

const Solitarie = () => {
  return (
    <Contenedor>
      <Grid container xs={12} direction="row">
        <Grid item sm={2}>
          <TableScore />
        </Grid>

        <Grid item sm={9}>
          <TableDices />
        </Grid>

        <EndGameModal />
      </Grid>
    </Contenedor>
  )
}
export default Solitarie;