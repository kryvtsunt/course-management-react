import React from 'react'
import CourseCard from '../../components/CourseCard'

export default class CourseManager extends React.Component {
    render() {
        return (
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
        )
    }
}