import './index.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

// import {Provider} from "react-redux";
 import {RootStateType, store} from "./redux/store-redux";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let rerenderEntireTree = (state: RootStateType) => {
    root.render(
        // <Provider store={store}>
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    />
            </BrowserRouter>

        //</Provider>
    );
}

rerenderEntireTree(store.getState())
store.subscribe( () => {
    rerenderEntireTree(store.getState())
} )
// reportWebVitals();
