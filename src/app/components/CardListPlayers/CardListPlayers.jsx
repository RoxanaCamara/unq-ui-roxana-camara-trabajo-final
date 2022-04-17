import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, Fab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    alingIcon: {
      marginLeft: '70%'
    }
  }));

const CardListPlayers = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
     
        <Typography variant="h4" gutterBottom>
       Search yoour friends
      </Typography> 
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="name user" />
          </Grid>
        </Grid>

          <List dense className={classes.root}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem key={value} button divider>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={`/static/images/avatar/${value + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <Fab color="primary" aria-label="add" className={classes.alingIcon}>
            <ArrowForwardIcon />
          </Fab>
       
    </>
  );
};
export default CardListPlayers;