import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootStateType } from '../../redux/store-redux';


export const Login = () => {

    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)


    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h1>
            WTF man where your login?
        </h1>

        </>
    )
}