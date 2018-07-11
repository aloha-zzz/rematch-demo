import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import Router from './component/router'

ReactDOM.render(
    <HashRouter>
        <Router />
    </HashRouter>
    , 
    document.getElementById('main'))
