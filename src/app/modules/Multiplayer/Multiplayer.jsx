import React from 'react'
import CardListPlayers from '../../components/CardListPlayers/CardListPlayers';
import { Contenedor } from '../../components/nav/Contenedor';
import CardChipPlayers from '../../components/CardChipPLayers/CardChipPlayers';

 const Multiplayer = () => {
  return (
    <Contenedor>   
      <CardChipPlayers/>        
      <CardListPlayers/>
    </Contenedor>      
  )
}
export default Multiplayer;