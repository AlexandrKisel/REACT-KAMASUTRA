import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);


serviceWorker.unregister();