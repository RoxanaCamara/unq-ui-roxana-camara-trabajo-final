import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faPencilRuler, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { Button, Container, IconButton, Typography, Toolbar, AppBar } from '@material-ui/core';

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
  button: {
    margin: theme.spacing(1),
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
      <Container fixed>
        <main>
          {children}
        </main>
      </Container>
    </div>
  )
}
