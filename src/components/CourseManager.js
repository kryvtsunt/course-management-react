import React, {Component} from 'react'
import CourseCard from './CourseCard'
import CourseDeck from './CourseDeck'

export default class CourseManager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1> Course Manager</h1>
                <CourseDeck/>
            </div>

        )
    }
}