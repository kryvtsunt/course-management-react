import React from 'react'
import {Link} from 'react-router-dom'


export default class LessonTabb
    extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (

            <li className="nav-item">
                <Link className="text-white nav-link active"
                      to={`/course/${this.props.course.id}/module/${this.props.module.id}/lesson/${this.props.lesson.id}`}>
                    {this.props.course.title}
                </Link>
            </li>



        );
    }
}
