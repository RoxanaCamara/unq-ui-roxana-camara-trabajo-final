import { Button, Container, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SessionContext } from '../helper/Session'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../login/style.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
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
        <Container className='body'>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                 <Grid item>
                 <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            EL famoso juego de mesa
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {bull}{bull} Generala {bull}{bull}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            ¿Cual vas a jugar hoy?
                        </Typography>
                        <Typography variant="body2" component="p">
                            {'"la generala nos salva cuando el ocio se está por volver aburrimiento"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button className="button-18" onClick={() => handleRedirect('/game')} >Play Solitarie</button>
                        <button className="button-18" onClick={() => handleRedirect('/game')} >Play Multiplayer</button>
                    </CardActions>
                </Card>
                 </Grid>
            </Grid>
        </Container>
    )
}
