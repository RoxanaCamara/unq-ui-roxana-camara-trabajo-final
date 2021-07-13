import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faPencilRuler } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 109,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export const Contenedor = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.title} variant="h4" noWrap>
                            Generala <FontAwesomeIcon icon={faDice} size="lg" />
                        </Typography>
                        <IconButton aria-label="search" color="inherit" >
                        <Typography className={classes.title} variant="h5" noWrap>Reglas 
                        <FontAwesomeIcon icon={faPencilRuler} size="lg" />
                        </Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>


            <main>
                {children}
            </main>

        </div>
    )
}
