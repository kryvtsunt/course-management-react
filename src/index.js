import React from 'react';
import ReactDom from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HelloWorld from './hello'


import CourseManager from './components/CourseManager'
ReactDom.render(
    <CourseManager/>,
    document.getElementById('root')
);