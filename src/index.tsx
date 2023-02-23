import './index.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {AppPropsType, store} from "./redux/state";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let rerenderEntireTree = (state: AppPropsType) => {
    root.render(
        <BrowserRouter>
            <App
                store={store}
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
// reportWebVitals();
