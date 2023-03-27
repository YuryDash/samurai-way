import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

import {Provider} from "react-redux";
import {store} from "./redux/store-redux";
import ReactDOM from 'react-dom';


// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

