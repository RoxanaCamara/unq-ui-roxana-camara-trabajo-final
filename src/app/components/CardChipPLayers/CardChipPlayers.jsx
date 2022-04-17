import React from "react";
import { Card, CardContent, Chip, Divider, Typography } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  marginsChip: {
    margin: theme.spacing(1),
    height: "50px"
  }
}));

const CardChipPlayers = () => {
  const nn = ["Narela", "Narela", "Narela", "Narela", "Narela"];

  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Players Guest
          </Typography>
          <Divider/>

          {nn.map((u) => (
            <Chip
            className={classes.marginsChip}
              size="medium"
              icon={<FaceIcon />}
              label={u}
              onClick={handleClick}
              onDelete={handleDelete}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
export default CardChipPlayers;
