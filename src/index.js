import React from 'react';
import ReactDOM from 'react-dom';
import Demo from "./Demo"
import store from "./store/index"
import {Provider} from "react-redux"


 
    ReactDOM.render(
        <Provider store = {store}> 
            <Demo/>
        </Provider>
    , document.getElementById('root'));
 
 
 

 