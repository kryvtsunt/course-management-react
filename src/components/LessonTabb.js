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
                <div className="btn-group btn-block">
                    <Link className="nav-link bg-dark text-white active"
                          to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}/topic/${undefined}`}>
                        {this.props.lesson.title}
                    </Link>
                    <span className="float-right">
                    <i className="btn fa fa-times" onClick={() => {
                        this.props.delete(this.props.courseId, this.props.moduleId, this.props.lesson.id)
                    }}>
                    </i>
                </span>
                </div>

            </li>



        )
            ;
    }
}
