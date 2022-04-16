import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Contenedor } from '../../components/nav/Contenedor';


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
          ¿Como se juega?
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>          
          La Generala es un juego de mesa para dos o más jugadores, en el que los jugadores se turnan para lanzar 5 dados hasta 3 veces por turno, eligiendo después de cada tirada qué dados guardar y cuáles volver a tirar. El objetivo es ganar puntos haciendo ciertas combinaciones o categorías, algunas de las cuales tienen un valor fijo y otras cuya puntuación depende del valor de los dados.
        </Typography>
                       
      </Container>
    </div>
    </Contenedor>
  );

}

export default Rules
 