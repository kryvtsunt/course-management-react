import React from 'react';
import ReactDom from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import HelloWorld from './hello'


import CourseManager from './containers/CourseManager'
import Stateless from "./components/Stateless";

ReactDom.render(
    <div className="container-fluid">
        <CourseManager/>
    </div>,
    document.getElementById('root')
);