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
import {RootStateType} from "./redux/store-redux";

export type PropsType = {
    state: RootStateType
    dispatch: (action: any) => void
}


const App = (props: PropsType) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar friendsName={props.state.dialogsReducer.dialogs}/>
            <div className="app-wrapper-content">
                <Routes>

                    <Route path='/profile' element={
                        <Profile
                            postsData={props.state.profileReducer}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/dialogs' element={
                        <DialogsContainer
                            // dialogsData={props.state.dialogsData}
                            // messagesData={props.state.messagesData}
                            // newMessageBody={props.state.newMessageBody}
                            state={props.state}
                            dispatch={props.dispatch}
                        />
                    }
                    />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>

                </Routes>
            </div>

        </div>

    );
}

export default App;


