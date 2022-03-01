import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faPencilRuler, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { Button, Container, IconButton, Typography, Toolbar, AppBar } from '@material-ui/core';
import { SessionContext } from '../../hooks/Session';
import { useJugadas } from '../../hooks/useJugadas';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const Contenedor = ({ children }) => {
  const { state } = useContext(SessionContext);
  const { tipoDeJugada } = state;
  const { initGame } = useJugadas()
  const classes = useStyles();
  const history = useHistory()

  const handleRedirect = (text) => {
    history.push(text)
    initGame()
  }


  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => handleRedirect(tipoDeJugada)}>
              <FontAwesomeIcon icon={faDice} size="lg" />
            </IconButton>
            <Typography variant="h2" className={classes.title}>
              Generala
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => history.push("/rules")}>
              <FontAwesomeIcon icon={faPencilRuler} size="lg" />
              <Typography variant="h6" className={classes.title}>
                Reglas
              </Typography>
            </IconButton>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => handleRedirect("/")}
              startIcon={<FontAwesomeIcon icon={faSignOutAlt} size="lg" />}
            >
              Abandonar
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Container>       
        {children}       
      </Container>
    </div>
  )
}
