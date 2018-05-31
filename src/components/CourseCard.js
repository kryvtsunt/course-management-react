import React from 'react'
import { Link } from 'react-router-dom'

export default class CourseCard
    extends React.Component {
    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://i2.wp.com/alwaysadragon.com/wp-content/uploads/2017/01/NU2-2.png?fit=300%2C300"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.course.title}</h5>
                    <Link className="btn btn-dark container-fluid" to={`/course/${this.props.course.id}/module/${undefined}/lesson/${undefined}/topic/${undefined}`}>
                        Edit
                    </Link>
                </div>
            </div>
        )
    }
}