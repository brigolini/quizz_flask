import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./index.css"
import store from "./redux/store";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
