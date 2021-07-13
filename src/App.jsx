import { Grid } from '@material-ui/core';
import { Contenedor } from './components/nav/Contenedor';
import TableGame from './components/table/Table';
import Box from '@material-ui/core/Box';
import { Dice } from './components/dice/Dice';

const App = () => {
  return (
    <Contenedor>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
          <Dice/>
        </Grid>
        <Grid item xs={6} md={6}>
        <TableGame />
        </Grid>
      </Grid>
  </Box>
    </Contenedor>
  );
}

export default App;
