import React, {Component} from 'react'
import CardDeck from './CardDeck'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
export default class CourseManager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1> Course Manager</h1>
                <LessonTabs/>
                <ModuleList/>
                <CardDeck/>
            </div>

        )
    }
}