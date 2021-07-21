import React from 'react'
import Button from '@material-ui/core/Button';

export const ButonTirada = ({ nombre, metodo, index  }) => {
    return (
        <>
        {
          !tiradas[index].played && <Button variant="contained" color="primary" onClick={ e => { metodo()  }} >{nombre}</Button>
        }
        </>
    )
}
