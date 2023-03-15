import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {store} from "./redux/store-redux";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar friendsName={store.getState().dialogsReducer.dialogs}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={ <Profile />}/>
                    <Route path='/dialogs' element={ <DialogsContainer />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;


