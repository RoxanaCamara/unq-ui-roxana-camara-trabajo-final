import { Grid } from '@material-ui/core';
import { Contenedor } from './components/nav/Contenedor';
import TableGame from './components/table/Table';
import Box from '@material-ui/core/Box';
import { Dice } from './components/dice/Dice';
import { Dices } from './components/dice/Dices';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }}));

const App = () => {
  const classes = useStyles();
  return (
    <Contenedor>
     <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} >
        <TableGame />
        </Grid>
        <Grid item xs={6}>
        <Dices />  
        </Grid>
      </Grid>
      </div>
    </Contenedor>
  );
}

export default App;
