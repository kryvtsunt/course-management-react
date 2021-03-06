import React, {Component} from 'react'
import CourseEditor from './CourseEditor'
import CourseList from '../child/CourseList'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class CourseManager extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route path="/courses"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"   // ?
                           component={CourseEditor}>
                    </Route>
                </div>
            </Router>

        )
    }
}