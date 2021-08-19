import { Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SessionContext } from '../helper/Session'

export const Login = () => {
        
    const history = useHistory()
    const handleLogin = () => {
        history.push("/Game")
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={ handleLogin } >JUGAR!!!</Button>
        </div>
    )
}
