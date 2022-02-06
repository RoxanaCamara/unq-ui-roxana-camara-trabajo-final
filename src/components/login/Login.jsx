import { Button, Container } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SessionContext } from '../helper/Session'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
export const Login = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const history = useHistory()

    const handleRedirect = (text) => {
        history.push(text)
    }


    return (
        <Container fixed >
            <video autoplay muted loop id="background-video">
                <source src="./dices.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {bull}{bull} Generala {bull}{bull}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={() => handleRedirect('/game')} >Jugar</Button>
                </CardActions>
            </Card>
        </Container>
    )
}
