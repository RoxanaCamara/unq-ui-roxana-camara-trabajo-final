import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { Button, Container, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Contenedor = ({ children }) => {
  const classes = useStyles();

  const history = useHistory()
  const handleRedirect = (text) => {
    history.push(text)
}

  
  return (
    <div>
       <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => handleRedirect("/game")}>
          <FontAwesomeIcon icon={faDice} size="lg" />
          </IconButton>
          <Typography variant="h2" className={classes.title}>
            Generala
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => handleRedirect("/rules")}>
          <FontAwesomeIcon icon={faPencilRuler} size="lg" /> 
          <Typography variant="h6" className={classes.title}>
            Reglas
          </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
      <Container fixed>
        <main>
          {children}
        </main>
      </Container>
    </div>
  )
}
