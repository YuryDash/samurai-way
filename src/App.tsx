import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {store} from "./redux/store-redux";
import {ProfileContainerWrapper} from "./components/Profile/ProfileContainer";
import {UserContainerConnect} from "./components/Users/UsersContainer";
import {ConnectHeader} from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <ConnectHeader/>
            <NavBar friendsName={store.getState().dialogsPage.dialogs}/>
            <div className="app-wrapper-content">
                <Route path='/profile/:userID?' render={() => <ProfileContainerWrapper/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UserContainerConnect />}/>
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


