import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";

let messagesData = [
    {id: v1(), message: 'hi'},
    {id: v1(), message: 'Hello my friend'},
    {id: v1(), message: 'Yo'},
    {id: v1(), message: 'Yo maan'},
]
let dialogsData = [
    {id: v1(), name: 'Andrzej'},
    {id: v1(), name: 'Piotrek'},
    {id: v1(), name: 'Bartek'},
    {id: v1(), name: 'Franek'},
    {id: v1(), name: 'Marek'},
    {id: v1(), name: 'Adam'},
]
let postsData = [
    {id: v1(), text: 'hi how are u?'},
    {id: v1(), text: 'u?'},
]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <BrowserRouter>
            <App
                messagesData={messagesData}
                dialogsData={dialogsData}
                postsData={postsData}
            />
        </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
