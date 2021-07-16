import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Contenedor } from '../nav/Contenedor';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

const Rules = () => {
  const classes = useStyles();

  return (
    <Contenedor>
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h2" gutterBottom>
          Como se juega ?
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Cada jugador tira los cinco dados para determinar el orden del juego. Sale primero el que saca la suma más baja, el que obtiene la suma inmediatamente superior se sienta a su izquierda y así sucesivamente. El orden sigue la dirección de las agujas del reloj.'}
        </Typography>
      </Container>
    </div>
    </Contenedor>
  );

}

export default Rules
 