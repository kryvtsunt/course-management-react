import React from 'react';
import ReactDom from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';


import CourseManager from './containers/parent/CourseManager'

ReactDom.render(
    <div className="container-fluid">
        <CourseManager/>
    </div>,
    document.getElementById('root')
);