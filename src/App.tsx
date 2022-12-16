import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs"
import {Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";


export type MessagesDataType = {
    id: string
    message: string
}
export type DialogsDataType = {
    id: string
    name: string
}
export type PostsDataType = {
    id: string
    text: string
}

type AppPropsType = {
    messagesData: MessagesDataType[]
    dialogsData: DialogsDataType[]
    postsData: PostsDataType[]
}

const App = (props: AppPropsType) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>

                    <Route path='/profile' element={<Profile postsData={props.postsData}/>}/>
                    <Route path='/dialogs' element={<Dialogs
                        dialogsData={props.dialogsData}
                        messagesData={props.messagesData}
                    />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>

                </Routes>
            </div>

        </div>

    );
}

export default App;


