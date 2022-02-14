import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, MuiDialogTitle, MuiDialogContent, MuiDialogActions, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { SessionContext } from '../helper/Session';
import { useJugadas } from '../helper/useJugadas';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

 const EndGameModal = () => {

  const { state } = useContext(SessionContext)
  const { finPartida  } = state
  const { initGame } = useJugadas()
  const history = useHistory()

  const handleClose = () => {
    initGame()
    history.push("/")
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={finPartida }>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Terminado!
        </DialogTitle>
        <DialogContent dividers>
        <Typography variant="h2" component="h2" gutterBottom>
        Total de  puntos logrados!
        </Typography>
          <Typography gutterBottom>
              Espero te hayas divertido como yo!
          </Typography>
          <Typography gutterBottom>
              Ya no se que mas decirte. Gracias por jugar!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
              Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EndGameModal;