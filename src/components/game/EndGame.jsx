import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core';
import { SessionContext } from '../helper/Session';
import { useJugadas } from '../helper/useJugadas';

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