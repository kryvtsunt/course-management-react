import React, {Component} from 'react'
import CardDeck from './CardDeck'
import CourseEditor from './CourseEditor'

export default class CourseManager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1> Course Manager</h1>
                <CourseEditor/>
                <CardDeck/>
            </div>

        )
    }
}