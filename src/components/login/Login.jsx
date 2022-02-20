import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import dices from "./dice.mp4";
import "../login/style.css";

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

const Login = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const history = useHistory();

  const handleRedirect = (text) => {
    history.push(text);
  };

  return (
    <div className="body">
       <video controls muted="true" autoPlay loop>
        <source src={dices} type="video/mp4" />
        <source src={dices} type="video/ogg" />
      </video>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            EL famoso juego de mesa
          </Typography>
          <Typography variant="h5" component="h2">
            {bull}
            {bull} Generala {bull}
            {bull}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            ¿Cual vas a jugar hoy?
          </Typography>
          <Typography variant="body2" component="p">
            {
              '"la generala nos salva cuando el ocio se está por volver aburrimiento"'
            }
          </Typography>
        </CardContent>
        <CardActions>
          <button className="button-18" onClick={() => handleRedirect("/solitarie")}>
            Solitario
          </button>
          <button className="button-18" onClick={() => handleRedirect("/multiplayer")}>
            Multijugador
          </button>
        </CardActions>
      </Card>
     
    </div>
  );
};
export default Login;