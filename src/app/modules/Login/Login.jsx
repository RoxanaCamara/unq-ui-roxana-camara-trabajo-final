import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import dices from "./dice.mp4";
import "./style.css";
import LoginUser from "../../components/LoginUser/LoginUser";

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
          <Typography variant="h2" gutterBottom>
            Generala
          </Typography>

          <LoginUser />
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
