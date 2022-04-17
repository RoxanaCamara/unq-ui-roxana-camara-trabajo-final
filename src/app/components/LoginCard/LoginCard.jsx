import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import dices from "./dice.mp4";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./style.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: "5% 5% 10% 50%",
    padding: '1%',    
    display: "flex",
    alignItems: "center"
  }
});

const Login = ({children}) => {
  const classes = useStyles();
  return (
    <div className="body">
      <video controls muted="true" autoPlay loop>
        <source src={dices} type="video/mp4" />
        <source src={dices} type="video/ogg" />
      </video>
      <Card className={classes.root}>
        <CardContent>
        <Typography variant="h2" component="h2">
             Generala
          </Typography>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
