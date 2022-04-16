import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardListPlayers from '../../components/CardListPlayers/CardListPlayers';
import { Contenedor } from '../../components/nav/Contenedor';
import { Chip } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

 const Multiplayer = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Contenedor>           
        <CardListPlayers/>        
        <Chip
        size="small"
        icon={<FaceIcon />}
        label="Clickable Deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />

    </Contenedor>      
  )
}
export default Multiplayer;