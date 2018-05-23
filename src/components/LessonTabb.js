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

                    <Link className="bg-dark text-white nav-link active"
                          to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                        {this.props.lesson.title}
                    </Link>

            </li>



    )
        ;
    }
}
