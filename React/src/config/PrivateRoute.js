import React from 'react'
import { Route } from 'react-router-dom';
import Header from './../components/Header/Header.jsx';


export const PrivateRoute = ({component: Component, auth, ...rest }) => (
    <Route {...rest} render={props => (
        <React.Fragment><Header {...props} /><Component  {...props} /></React.Fragment>
    )} />
)