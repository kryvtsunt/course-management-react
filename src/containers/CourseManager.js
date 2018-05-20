import React, {Component} from 'react'
import CardDeck from './CardDeck'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'

export default class CourseManager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1> Course Manager</h1>
                <CourseList/>
                <CourseEditor/>
                <CardDeck/>
            </div>

        )
    }
}