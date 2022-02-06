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
          Generala es un juego de dados que consiste en tirar 5 dados, de los dados obtenidos formar algun tipo de tirada y lograr mayor puntos que tu rival. Dentro de nuestra app, se juega en solitario por lo tanto se gana cuando no quedan mas tiradas por realizar. A continuacion detallamos las diferentes tipos de tiradas que podemos realizar
        </Typography>
        {//<CollapsibleTable /> 
        }               
      </Container>
    </div>
    </Contenedor>
  );

}

export default Rules
 