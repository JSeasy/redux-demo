import React from 'react';
import ReactDOM from 'react-dom';
import Demo from "./Demo"
import store from "./store/index"
import {Provider} from "react-redux"

import {BrowserRouter} from 'react-router-dom'
 
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}> 
                <Demo/>
            </Provider>
        </BrowserRouter>
    , document.getElementById('root'));
 
 
 

 