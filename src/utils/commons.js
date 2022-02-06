import React from 'react';
import { Redirect } from 'react-router-dom';


export const handleRedirect = (text) => {
    return <Redirect to={text} />
};