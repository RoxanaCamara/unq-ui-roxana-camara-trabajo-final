import { Button, Container } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SessionContext } from '../helper/Session'
import sample from './sample.mp4';

export const Login = () => {
        
    const history = useHistory()
    const handleLogin = () => {
        history.push("/Game")
    }

    return (
        <Container fixed className="videoBackground">
            <video id="background-video" className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <Button variant="contained" color="primary" onClick={ handleLogin } >JUGAR!!!</Button>
        </Container>
    )
}
