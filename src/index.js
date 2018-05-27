import React, {Component} from 'react';
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';


import CourseManager from './containers/parent/CourseManager'

import {widgetReducer} from './reducers/WidgetReducer'
import {Widgets} from "./containers/child/WidgetList";







let store = createStore(widgetReducer);

ReactDom.render(
    <div className="container-fluid">
        <CourseManager/>
        <Provider store={store}>
            <Widgets/>
        </Provider>
    </div>
    ,
    document.getElementById('root')
);