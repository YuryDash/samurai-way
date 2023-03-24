import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {store} from "./redux/store-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar friendsName={store.getState().dialogsPage.dialogs}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={ <ProfileContainer />}/>
                    <Route path='/dialogs' element={ <DialogsContainer />}/>
                    <Route path='/users' element={ <UsersContainer/> }/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;


