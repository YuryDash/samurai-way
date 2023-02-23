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
import {AppPropsType, StoreType} from "./redux/state";

export type PropsType = {
    store: StoreType
    state: AppPropsType
    dispatch: (action: any) => void
}


const App = (props: PropsType) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar friendsName={props.state.dialogsData.dialogs}/>
            <div className="app-wrapper-content">
                <Routes>

                    <Route path='/profile' element={
                        <Profile
                            postsData={props.state.postsData}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/dialogs' element={
                        <Dialogs
                            // dialogsData={props.state.dialogsData}
                            // messagesData={props.state.messagesData}
                            // newMessageBody={props.state.newMessageBody}
                            store={props.store}
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


