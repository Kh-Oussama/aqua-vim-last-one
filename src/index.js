import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import '@fortawesome/fontawesome-free/js/all';
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./redux/store";
import { store } from "./redux/store";
import {Provider} from "react-redux";





ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                    <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
