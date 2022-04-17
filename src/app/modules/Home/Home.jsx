import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SessionContext } from "../../hooks/Session";
import { makeStyles, Typography } from "@material-ui/core";
import { Contenedor } from "../../components/nav/Contenedor";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: "1rem 5rem 1rem 5rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home = () => {
  const classes = useStyles();

  const { actions } = useContext(SessionContext);
  const { setTipoDeJugada } = actions;

  const history = useHistory();

  const handleRedirect = (text) => {
    history.push(text);
    setTipoDeJugada(text);
  };
  return (
    <Contenedor>
      <div>
        <Typography variant="body2" component="p">
          La generala nos salva cuando el ocio se está por volver aburrimiento
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          ¿Cual vas a jugar hoy?
        </Typography>

        <button
          className="button-18"
          onClick={() => handleRedirect("/solitarie")}
        >
          Solitario
        </button>
        <button
          className="button-18"
          onClick={() => handleRedirect("/multiplayer")}
        >
          Multijugador
        </button>
      </div>
    </Contenedor>
  );
};
export default Home;