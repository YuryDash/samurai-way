import React, { useEffect } from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {RootStateType, store} from "./redux/store-redux";
import UserContainerConnect from "./components/Users/UsersContainer";
import {ConnectHeader} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import ProfileContainer from './components/Profile/ProfileContainer';
import { useDispatch, useSelector } from 'react-redux';
import {authThunkCreator} from "./redux/auth-reducer";

const App = () => {

    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)


    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(authThunkCreator())
    },[] )

    return (
        <div className='app-wrapper'>
            <ConnectHeader/>
            <NavBar friendsName={store.getState().dialogsPage.dialogs}/>
            <div className="app-wrapper-content">
                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UserContainerConnect/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

                {/*<Route path='/*' element={() => <div><h1>PAGE NOT FOUND (Error code: 404)</h1></div>}/>*/}
                {/*<Route path='/' element={() => <div><h1>hello my friend</h1></div>}/>*/}
            </div>
        </div>
    );
}
export default App;


